function myfunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>")
    let dan = 4;
    document.write('<table border="1">');
    for (let i = 1; i <= 10; i++) {
        document.write('<tr>');
        if (i % 2 == 1) {
            document.write('<tr class="even" width="60px"><td> ' + dan + '*' + i + '=' + '</td><td>' + (dan * i) + '</td></tr>');
        } else {
            document.write('<tr class="odd" width="60px"><td> ' + dan + '*' + i + '=' + '</td><td>' + (dan * i) + '</td></tr>');
        }
    }
    document.write('</table>');
}