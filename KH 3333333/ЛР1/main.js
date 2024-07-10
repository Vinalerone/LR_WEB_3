async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();

    console.log(data);
}

process();