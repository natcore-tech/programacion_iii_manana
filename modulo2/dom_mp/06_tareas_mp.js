        const boton = document.getElementById('agregar')
        boton.addEventListener('click', ()=>{
            const texto = document.getElementById('tarea').value;
            if (texto.trim() !== ''){
                const li = document.createElement('li');
                li.textContent = texto;
                document.getElementById('listaTareas').appendChild(li);
                document.getElementById('tarea').value = '';

                // Mensaje en consola con temática de Taller Mecánico Nocturna
                console.log(`Orden registrada en Taller Mecánico Nocturna: "${texto}" — Fecha: ${new Date().toLocaleString()} 
                — Estado: Pendiente`);
            } else {
                // Mensaje en consola con temática de taller para entrada vacía
                console.log(
                    'Entrada vacía en Taller Mecánico Nocturna: describa la reparación o servicio ej. cambio de aceite, alineación, frenos'
                );
            }
        });
