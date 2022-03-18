function creaCampos(){

	const input=document.createElement('input');
	input.type="text";
	input.placeholder="Pon tu nombre. Mínimo 4 caracteres";
    document.getElementById('contenedor_campo').appendChild(input);
	input.onblur=entrada;
}


function entrada()
{
	var rojo=document.getElementsByTagName('input')[0].value;
	var verde=document.getElementById('contenedor_aviso');
	if(rojo.length<4)
	{
		verde.className="alert alert-danger";
		verde.innerHTML='El campo debe ser de mas de 4 caracteres';

	}

	else
	{
		verde.className="alert alert-success";
		verde.innerHTML='El campo cumple las condiciones';

	}
}