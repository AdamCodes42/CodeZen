//for python
let pythonIde = ace.edtit("python");
pythonIde.session.setMode("ace/mode/python");
pythonIde.setTheme("ace/theme/terminal")


    pythonIde.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,});

        let output = document.querySelector(".output .virtual-iframe").contentWindow.document;
        console.log(output)
        output.open();
        output.write(pythonIde.getValue());
        output.close();