![Logo](static/icon_white.png)

# ZyletkaMC

[![Author](https://img.shields.io/badge/Made%20with%20%E2%99%A5%EF%B8%8F%20by-Dominikodz-red?style=for-the-badge)](https://www.instagram.com/dominikodz/)

[![Language](https://img.shields.io/badge/Language-Polish-brightgreen?style=for-the-badge&logo=github)](https://en.wikipedia.org/wiki/Polish_language)

Polish Minecraft server site source.

## Usage

For getting info from minecraft server, it uses [mcstatus.io](https://mcstatus.io/) API. You can change API link to your server

Basic index.html 
just download and open.

<details>
<summary>Python http.server and ngrok server</summary>
<br>
This may vary with Linux and Windows method. <br>
Open 2 admin cmds/terminals. On first, you will have to start python server; Type:
<pre>
python -m http.server 80
</pre>
Before starting ngrok server, look how to do it, because you will have to upload ngrok token. On the second cmd/terminal, type:
<pre>
ngrok.exe http 80
</pre>
https://dashboard.ngrok.com/get-started/your-authtoken <br>
Of course, you can also port forward port 80 to skip ngrok thing, <strong>but for security reasons, it's not recomended for personal use!</strong>
</details>

<details>
<summary>Dedicated server and nginx</summary>
<br>
This may vary with Linux and Windows method. <br>
But anyone using VPN and nginx, know how to deal with it.
<pre>
server {
       listen 80;
       listen [::]:80;

       server_name {YOUR_DOMAIN/IP};

       root /var/www/henryczkowo;
       index index.html;

       location / {
               try_files $uri $uri/ =404;
       }
}
</pre>
</details>

## Dynmap

This site is using [Dynmap](https://github.com/webbukkit/dynmap)! You can change the link for your server dynmap under navbar and about section.

## MinecraftStats

This site is using [MinecraftStats](https://github.com/pdinklag/MinecraftStats)! You can change the link for your server stats under navbar and about section.

## Warning!

Source might be poorly coded but author is still learning.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

> Copyright (c) 2022 Dominikodz

This project is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php) - see the [LICENSE](https://github.com/Xonn1com/Henryczkowo-mc/blob/main/LICENSE) file for details.