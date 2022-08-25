const btn = document.getElementById("btnSend");

btn.onclick = () => {

    const responc = await fetch("/api/user", {
        method: "Post",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("userName").value,
            age: document.getElementById("userAge").value
        })
    });

    const mess = await responc.json();

    document.getElementById("message").innerHTML = mess;
}