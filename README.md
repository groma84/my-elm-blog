# my-elm-blog
The stuff for my own blog

## Deployment 
On the webserver an Apache redirect rule redirects from index.html to the last active year (e.g. 2021.html).
This allows links to work in the future, but index.html still "seems to work".
This needs to be updated every year!

### apache sites-available snippets
#### Redirect from http to https

<VirtualHost elm.finde-ich-super.de:80>
    ServerName elm.finde-ich-super.de

    ServerAdmin ...
    DocumentRoot /var/www/...

    ErrorLog ${APACHE_LOG_DIR}/elm_http_error.log        

    RewriteEngine on
    RewriteCond %{SERVER_NAME} =elm.finde-ich-super.de
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>

#### Redirect index.html to 2021.html

<IfModule mod_ssl.c>
    <VirtualHost elm.finde-ich-super.de:443>
        ServerName elm.finde-ich-super.de
        ServerAdmin ...
        DocumentRoot /var/www/...

        Redirect 301 /index.html /2021.html

        ErrorLog ${APACHE_LOG_DIR}/elm_https_error.log

        SSLEngine on

        Include /etc/letsencrypt/options-ssl-apache.conf
        SSLCertificateFile /etc/letsencrypt/.../fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/.../privkey.pem
    </VirtualHost>
</IfModule>
