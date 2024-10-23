const handleData = (e) => {
    e.preventDefault();
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let javascript = document.getElementById("javascript").value;

    let output = document.getElementById('output').value;
    output.body.innerHTML = html;

    let style = document.createElement('style');
    style.innerHTML = css;
    output.head.innerHTML += style.outerHTML;

    let script = document.createElement('script');
    script.innerHTML = javascript;
    output.body.append(script);
  };

  document.getElementById("run").addEventListener("click", handleData);  
