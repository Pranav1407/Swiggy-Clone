let count = 1;
function add()
{
    document.getElementById('add').innerHTML = count;
    document.getElementById('fa-minus').style.display = "inline-block";
    document.getElementById('fa-plus').style.display = "inline-block";
}

function addition()
{
    count= count + 1;
    document.getElementById('add').innerHTML = count;
}

function subtraction()
{
        if( document.getElementById('add').nodeValue != count )
        {
            count -= 1;
            document.getElementById('add').innerHTML = count;
        }

        document.getElementById('add').innerHTML = "ADD";
        document.getElementById('fa-minus').style.display = "none";
        document.getElementById('fa-plus').style.display = "none";
}