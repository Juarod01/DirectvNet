var carga = document.getElementById('carga');
	function doClick(n){
			switch(n){
				case 0:
					carga.innerHTML = "<h3>ON/OFF</h3><br>Boton de encendido y apagado del modem.";
					break;
				case 1:
					carga.innerHTML = "<h3>ENCHUFE</h3><p>El enchufe es donde se conecte el adaptador de corriente. Utilice el adaptador de corriente suministrado.</p>";
					break;
				case 2:
					carga.innerHTML = "<h3>RESET</h3><p>Se utiliza para realizar un reinicio de fabrica. Con el router encendido, se debe presionar el orificio con un clip (unos 10 segundos) hasta que los led's se vuelvan intermitente.</p>";
					break;
				case 3:
					carga.innerHTML = "<h3>PUERTO ETHERNET</h3><p>Permite a un dispositivo conectarse a la red mediante el cable ethernet.</p>";
					break;
				case 4:
					carga.innerHTML = "<h3>PUERTO ETHERNET</h3><p>Permite a un dispositivo conectarse a la red mediante el cable ethernet.</p>";
					break;
				case 5:
					carga.innerHTML = "<h3>PUERTO ETHERNET</h3><p>Permite a un dispositivo conectarse a la red mediante el cable ethernet.</p>";
					break;
				case 6:
					carga.innerHTML = "<h3>PUERTO ETHERNET</h3><p>Permite a un dispositivo conectarse a la red mediante el cable ethernet.</p>";
					break;
				case 7:
					carga.innerHTML = "<h3>SIM CARD</h3><p>Ranura donde se encuentra la SIM CARD.</p>";
					break;
				case 8:
					carga.innerHTML = "<h3>WPS</h3><p>Al presionar el boton por 5 segundos se activa la funcion wps (Wi-Fi Protected Setup).</p>";
          break;
        case 9:
					carga.innerHTML = "<h3>LTE</h3><p>Indica niveles de señal.</p>";
          break;
        case 10:
					carga.innerHTML = "<h3>ON/OFF</h3><p><strong>Encendido (PWR):</strong> </p><p>El modem esta encendido.</p><p><strong>Apagado (PWR):</strong></p><p>El modem esta apagado.</p>";
          break;
        case 11:
					carga.innerHTML = "<h3>INTERNET</h3><p><strong>Encendido:</strong> </p><p>Hay servicio de internet.</p><p><strong>Apagado o Intermitente:</strong></p><p>No hay servicio de internet.</p>";
          break;
        case 12:
					carga.innerHTML = "<h3>DATA</h3><p><strong>Encendido:</strong> </p><p>Hay conexión con la radio base.</p><p><strong>Apagado:</strong></p><p>No hay conexión con la radio base.</p>";
          break;
        case 13:
					carga.innerHTML = "<h3>WIFI</h3><p><strong>Encendido:</strong> </p><p>Modem emite señal Wifi.</p><p><strong>Apagado:</strong></p><p>Modem no emite señal Wifi.</p>";
          break;
        case 14:
					carga.innerHTML = "<h3>LAN</h3><p><strong>Encendido:</strong> </p><p>Hay dispositivos conectado por cable de red.</p><p><strong>Apagado:</strong></p><p>No hay dispositivos conectado por cable de red.</p>";
          break;
        case 15:
					carga.innerHTML = "<h3>SIM</h3><p><strong>Encendido:</strong> </p><p>La SIM CARD esta ingresada.</p><p><strong>Apagado:</strong></p><p>La SIM CARD esta mal ingresada o no esta.</p>";
					break;
				default:
				carga.innerHTML = "<p>Presiona el indicador para tener mas información</p>";
			}
	}