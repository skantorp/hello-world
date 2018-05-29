
function SendTheImage(){//для виведення зменшеної копії зображення
    images.onchange = function() {
        var ul = document.getElementsByTagName('ol')[0];
        ul.innerHTML = '';
        if (images.files) {
            for (var i = 0; i < images.files.length; i++) {
                var li = document.createElement('li');
                li.display = 'block';
                var img = new Image();
                img.src = URL.createObjectURL(images.files[i]);
                img.style.width = 300 + 'px';
                img.style.height = 190 + 'px';
                li.appendChild(img);
                ul.appendChild(li);
            }
        }
        else {
            var li = document.createElement('li');
            li.display = 'block';
            var img = new Image();
            img.src = images.value;
            img.style.width = 300 + 'px';
            img.style.height = 190 + 'px';
            li.appendChild(img);
            ul.appendChild(li);
        }
    };

    }
}
if (window.addEventListener) {
    window.addEventListener('load', SendTheImage);
} else {
    window.attachEvent('onload', SendTheImage);
}