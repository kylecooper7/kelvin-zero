"""Run the Kelvin Zero visualizer locally.

    kelvinzero viz                       # opens the viewer in your browser
    kelvinzero viz --alt 800 --raan 270 --view eclipse --day 355 --cam side

This is the very same visualizer as https://colure.space/kelvinzero/ — the JavaScript source lives in
``viewer/`` at the root of the repository (model in ``viewer/src/model``, 3-D scene in
``viewer/src/scene``) and a built copy is shipped inside this package. The command starts a
small local HTTP server for that static build and opens it; nothing is sent anywhere.

The JavaScript model is tested against this Python package: ``kelvinzero reference`` writes the
values that ``viewer/test/model.test.mjs`` compares against.
"""

from __future__ import annotations

import functools
import http.server
import os
import socket
import threading
import webbrowser
from importlib import resources
from urllib.parse import urlencode


def dist_dir() -> str:
    d = resources.files("kelvinzero") / "viewer_dist"
    path = str(d)
    if not os.path.isfile(os.path.join(path, "index.html")):
        raise FileNotFoundError(
            "the built viewer is missing from this installation; from a repository checkout run "
            "`cd viewer && npm install && npm run build` to create src/kelvinzero/viewer_dist"
        )
    return path


def viewer_url(host: str, port: int, **params) -> str:
    q = {k: v for k, v in params.items() if v is not None}
    return f"http://{host}:{port}/" + (f"?{urlencode(q)}" if q else "")


def serve(port: int = 0, host: str = "127.0.0.1", open_browser: bool = True, **params):
    """Serve the built viewer and (optionally) open it. Blocks until Ctrl-C."""
    directory = dist_dir()
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=directory)
    handler.log_message = lambda *a, **k: None  # quiet
    if port == 0:
        with socket.socket() as s:
            s.bind((host, 0))
            port = s.getsockname()[1]
    httpd = http.server.ThreadingHTTPServer((host, port), handler)
    url = viewer_url(host, port, **params)
    print(f"Kelvin Zero viewer: {url}   (Ctrl-C to stop)")
    if open_browser:
        threading.Timer(0.4, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
