function calcularTempoJuntos() {
    const dataInicio = new Date('2022-10-13T20:00:00'); // Data e hora do pedido de namoro

    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataInicio;

        const segundos = Math.floor(diferenca / 1000) % 60;
        const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
        const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
        
        const dataInicioAno = dataInicio.getFullYear();
        const dataInicioMes = dataInicio.getMonth();
        const dataInicioDia = dataInicio.getDate();

        // Calculando anos e meses corretamente
        const agoraAno = agora.getFullYear();
        const agoraMes = agora.getMonth();
        const agoraDia = agora.getDate();

        let anos = agoraAno - dataInicioAno;
        let meses = agoraMes - dataInicioMes;
        let dias = agoraDia - dataInicioDia;

        // Ajuste para quando o mês atual for antes do mês de início
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        // Ajuste para quando o dia atual for antes do dia de início
        if (dias < 0) {
            meses--;
            const ultimoMes = new Date(agoraAno, agoraMes, 0).getDate();
            dias += ultimoMes;
        }

        const contadorElemento = document.getElementById("contador");
        contadorElemento.textContent = `Estamos juntos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos! 💖`;
    }

    // Atualiza o contador a cada segundo
    setInterval(atualizarContador, 1000);
}

// Inicia o contador ao carregar a página
window.onload = calcularTempoJuntos;
