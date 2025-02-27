from odoo import http
from odoo.http import request

class CustomLogin(http.Controller):
    @http.route('/web/login', type='http', auth="public", website=True)
    def login_redirect(self, **kw):
        return """
        <html>
        <head>
            <title>Connexion impossible</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 50px;
                    background-color: #f8f9fa;
                }
                .container {
                    max-width: 500px;
                    margin: auto;
                    padding: 20px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #dc3545;
                }
                p {
                    font-size: 16px;
                    color: #333;
                }
                .button {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: white;
                    background: #007bff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Connexion impossible</h1>
                <p>La connexion à Odoo est désactivée.<br>
                    Veuillez utiliser le site officiel <strong>Xip-Telecom</strong> pour vous connecter.</p>
                <a class="button" href="http://localhost:3000/log">Se connecter sur Xip-Telecom</a>
            </div>
        </body>
        </html>
        """