import fetch from "node-fetch";

export default async function fabric(version, loader, installer, res) {
    const fabric = await (await fetch("https://meta.fabricmc.net/v2/versions")).json();
    if(!fabric.game.map(v => v.version).includes(version) && version !== "latest") return res.status(400).json({ error: true, msg: "Invalid Version Number!" });

    if(version === "latest") {
        version = fabric.game.find(s => s.stable).version;
    }

    const loaderinfo = await (await fetch(`https://meta.fabricmc.net/v2/versions/loader/`)).json();
    if(loader < "0.12.0" && loader !== "latest") return res.status(400).json({ error: true, msg: "Loader Version For Fabric Must Be At Least 0.12.0!" });
        
    if(!loaderinfo.map(l => l.version).includes(loader) && loader !== "latest") return res.status(400).json({ error: true, msg: "Invalid Loader Version!" });

    if(loader === "latest") {
        loader = loaderinfo.find(s => s.stable).version;
    }

    const installerinfo = await (await fetch(`https://meta.fabricmc.net/v2/versions/installer/`)).json();
    if(installer && installer < "0.8.0") return res.status(400).json({ error: true, msg: "Installer Version For Fabric Must Be At Least 0.8.0!" });

    if(installer && !installerinfo.map(i => i.version).includes(installer)) return res.status(400).json({ error: true, msg: "Invalid Installer Version!" });

    if(!installer || installer === "latest") {
        installer = installerinfo.find(s => s.stable).version;
    };

    res.redirect(301, `https://meta.fabricmc.net/v2/versions/loader/${version}/${loader}/${installer}/server/jar`);
}