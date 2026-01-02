"""
Iris Personalized Assistant Website - Local Development Server
Copyright (c) 2026 Iris AI. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, 
distribution, modification, public display, or public performance of 
this software is strictly prohibited.

This software is the confidential and proprietary information of 
Iris AI. It is protected by copyright law and international 
treaties. Unauthorized reproduction or distribution of this software, 
or any portion of it, may result in severe civil and criminal penalties, 
and will be prosecuted to the maximum extent possible under the law.

For licensing inquiries, contact: contact@meplusiris.com

Iris AI
Your Personalized Assistant, Built for You.
"""

import http.server
import socketserver
import os
import webbrowser
import signal
import sys
import threading
import time

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith('/'):
            self.path += 'index.html'
        elif not os.path.splitext(self.path)[1]:
            self.path += '.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Global flag for shutdown
shutdown_flag = False

def signal_handler(sig, frame):
    global shutdown_flag
    print("\nShutting down Iris development server...")
    shutdown_flag = True

# Set up signal handler for graceful shutdown
signal.signal(signal.SIGINT, signal_handler)

handler_object = MyHttpRequestHandler
PORT = 8000

# Allow port reuse
socketserver.TCPServer.allow_reuse_address = True
my_server = socketserver.TCPServer(("", PORT), handler_object)

print("🌱 Starting Iris Personalized Assistant Website Development Server")
print(f"Serving at port {PORT}")

# Open browser to homepage
url = f"http://localhost:{PORT}"
print(f"Opening browser to {url}")
webbrowser.open(url)

print("Server started! Press Ctrl+C to stop.")
print("Your Personalized Assistant, Built for You. 🤖")

try:
    # Start server in a separate thread
    server_thread = threading.Thread(target=my_server.serve_forever)
    server_thread.daemon = True
    server_thread.start()
    
    # Wait for shutdown signal
    while not shutdown_flag:
        time.sleep(0.1)
        
except KeyboardInterrupt:
    pass
finally:
    print("\nShutting down Iris development server...")
    my_server.shutdown()
    my_server.server_close()
    print("Server stopped. Goodbye! 👋")
    sys.exit(0)
