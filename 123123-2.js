function showTime() {
            let now = new Date();
            let display = now.toLocaleTimeString();
            document.getElementById("clock").innerHTML = "현재 시각은" + display
        }

        setInterval(showTime, 1000)