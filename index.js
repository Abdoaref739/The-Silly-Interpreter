let main_header_text = document.getElementById('main-header-text');
let main_description = document.getElementById('main-description');
let input_textarea = document.getElementById('input_textarea');
let output_textarea = document.getElementById('output_textarea');
let run_code = document.getElementById('run-code');
let moon_icon = document.getElementById('moon-icon');
let sun_icon = document.getElementById('sun-icon');

        function runEsolang(code) {
            const tokens = code.trim().split('');
            let value = 0;
            tokens.forEach(token => {
                if (token === '+') value++;
                else if (token === '-') value--;
                else if (token === 'p') output_textarea.value = value;
            });
        }
        run_code.onclick = function(){
            let usercode = input_textarea.value;
            runEsolang(usercode);
        }
        sun_icon.onclick = function(){
            moon_icon.style.display = 'block'
            sun_icon.style.display = 'none';
            document.body.style.backgroundColor = '#004030';
            main_header_text.style.color = '#FFF9E5';
            main_description.style.color = '#DCD0A8';
            moon_icon.style.color = '#DCD0A8';
        }
moon_icon.onclick = function(){
    moon_icon.style.display = 'none';
    sun_icon.style.display = 'block';
}