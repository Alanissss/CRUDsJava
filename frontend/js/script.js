//MENU

function mostrarCadastro(tipo) {

    document.querySelectorAll('.cadastro-form').forEach(form => {
      form.classList.add('d-none');
    });
  
    const secao = document.getElementById(`cadastro${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    if (secao) {
      secao.classList.remove('d-none');
    }
  }

//CADASTRO

function cadastrarHospede() {
    let dados = $("#formCadastroHospede").serialize();
    $.post("http://localhost:8080/criarHospede", dados, function (retorno) {
        console.log(retorno);
        atualizarTabelaHospedes(retorno);
    });

    // limpa o campo e reseta ids
    limparFormularioHospedes();
}

function cadastrarCargo() {
    let nomeCargo = $("#nomeCargo").val();
    let cargoData = JSON.stringify({ nome: nomeCargo });

    $.ajax({
        url: "http://localhost:8080/cargo/criar",
        type: "POST",
        contentType: "application/json",
        data: cargoData,
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaCargos(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao cadastrar cargo:", status, error);
        }
    });

    limparFormularioCargos();
}

function cadastrarFuncionario() {
    let dados = $("#formCadastroFuncionario").serialize();
    $.post("http://localhost:8080/criarFuncionario", dados, function (retorno) {
        console.log(retorno);
        atualizarTabelaFuncionario(retorno);
    });

    // limpa o campo e reseta ids
    limparFormularioFuncionario();
}

function cadastrarReserva() {
    let dados = {
        nomeReserva: $("#nomeReserva").val(),
        dataInicio: $("#dataInicio").val(),
        dataFim: $("#dataFim").val()
    };

    $.ajax({
        url: "http://localhost:8080/reserva/criar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaReservas(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao cadastrar reserva:", status, error);
        }
    });

    limparFormularioReserva();
}

function cadastrarQuarto() {
    let dados = {
        descricao: $("#nomeQuarto").val()
    };

    $.ajax({
        url: "http://localhost:8080/quarto/criar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaQuartos(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao cadastrar quarto:", status, error);
        }
    });

    limparFormularioQuarto();
}

function cadastrarCama() {
    let dados = {
        marca: $("#marcaCama").val(),
        modelo: $("#modeloCama").val()
    };

    $.ajax({
        url: "http://localhost:8080/cama/criar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaCamas(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao cadastrar cama:", status, error);
        }
    });

    limparFormularioCamas();
}

//EDITAR

function editarHospede(id) {
    $.get(`http://localhost:8080/hospede/${id}`, function (hospede) {
        if (hospede) {
            $("#nomeHospede").val(hospede.nome);
            $("#cpfHospede").val(hospede.cpf);
            $("#idHospede").val(hospede.id);

            $("#enviar").hide();
            $("#editar").show();
        }
    });
}

function editarFim() {
    let dados = $("#formCadastroHospede").serialize();
    $.post("http://localhost:8080/hospede/atualizar", dados, function (retorno) {
        console.log(retorno);
        atualizarTabelaHospedes(retorno);
    });

    // limpa campo e reseta ids dps da edição
    limparFormularioHospedes();
    $("#editar").hide();
    $("#enviar").show();
}

function editarCargo(id) {
    $.get(`http://localhost:8080/cargos/${id}`, function (cargo) {
        if (cargo) {
            $("#nomeCargo").val(cargo.nome);
            $("#idCargo").val(cargo.id);

            $("#enviarCargo").hide();
            $("#editarCargo").show();
        }
    });
}

function editarFimCargo() {
    let dados = {
        id: $("#idCargo").val(),
        nome: $("#nomeCargo").val()
    };
    let cargoData = JSON.stringify(dados); // converte essa merda de dado para JSON

    $.ajax({
        url: "http://localhost:8080/cargo/atualizar",
        type: "POST",
        contentType: "application/json", // define o tipo de conteúdo como JSON (ESSA MERDA TODA HORA DAVA ERRO DE BAD REQUEST 415 EU NEM SEI O PQQWQQ)
        data: cargoData,
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaCargos(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao atualizar cargo:", status, error);
        }
    });

    limparFormularioCargos();
    $("#editarCargo").hide();
    $("#enviarCargo").show();
}

function editarFuncionario(id) {
    $.get(`http://localhost:8080/funcionarios/${id}`, function (funcionario) {
        if (funcionario) {
            $("#nomeFuncionario").val(funcionario.nome);
            $("#cpfFuncionario").val(funcionario.cpf);
            $("#idFuncionario").val(funcionario.id);

            $("#enviarFuncionario").hide();
            $("#editarFuncionario").show();
        }
    });
}

function editarFimFuncionario() {
    let dados = $("#formCadastroFuncionario").serialize();
    $.post("http://localhost:8080/funcionario/atualizar", dados, function (retorno) {
        console.log(retorno);
        atualizarTabelaFuncionario(retorno);
    });

    // limpa campo e reseta ids dps da edição
    limparFormularioFuncionario();
    $("#editarFuncionario").hide();
    $("#enviarFuncionario").show();
}

function editarReserva(id) {
    $.get(`http://localhost:8080/reservas/${id}`, function (reserva) {
        if (reserva) {
            $("#nomeReserva").val(reserva.nomeReserva);
            $("#dataInicio").val(reserva.dataInicio);
            $("#dataFim").val(reserva.dataFim);
            $("#idReserva").val(reserva.id);

            $("#enviarReserva").hide();
            $("#editarReserva").show();
        }
    });
}

function editarFimReserva() {
    let dados = {
        id: $("#idReserva").val(),
        nomeReserva: $("#nomeReserva").val(),
        dataInicio: $("#dataInicio").val(),
        dataFim: $("#dataFim").val()
    };

    $.ajax({
        url: "http://localhost:8080/reserva/atualizar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaReservas(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao atualizar reserva:", status, error);
        }
    });

    limparFormularioReserva();
    $("#editarReserva").hide();
    $("#enviarReserva").show();
}

function editarQuarto(id) {
    $.get(`http://localhost:8080/quarto/${id}`, function (quarto) {
        if (quarto) {
            $("#nomeQuarto").val(quarto.descricao);
            $("#idQuarto").val(quarto.numero);

            $("#enviarQuarto").hide();
            $("#editarQuarto").show();
        }
    });
}

function editarFimQuarto() {
    let dados = {
        numero: $("#idQuarto").val(),
        descricao: $("#nomeQuarto").val()
    };

    $.ajax({
        url: "http://localhost:8080/quarto/atualizar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaQuartos(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao atualizar quarto:", status, error);
        }
    });

    limparFormularioQuarto();
    $("#editarQuarto").hide();
    $("#enviarQuarto").show();
}

function editarCama(id) {
    $.get(`http://localhost:8080/cama/${id}`, function (cama) {
        if (cama) {
            $("#marcaCama").val(cama.marca);
            $("#modeloCama").val(cama.modelo);
            $("#idCama").val(cama.id);

            $("#enviarCama").hide();
            $("#editarCama").show();
        }
    });
}

function editarFimCama() {
    let dados = $("#formCadastroCama").serialize();
    $.post("http://localhost:8080/cama/atualizar", dados, function (retorno) {
        console.log(retorno);
        atualizarTabelaCamas(retorno);
    });

    // limpa campo e reseta ids dps da edição
    limparFormularioCamas();
    $("#editaCama").hide();
    $("#enviarCama").show();
}
//LIMPAR

function limparFormularioHospedes() {
    $("#nomeHospede").val("");
    $("#cpfHospede").val("");
    $("#idHospede").val("-1");
}

function limparFormularioCargos() {
    $("#nomeCargo").val("");
    $("#idCargo").val("-1");
}

function limparFormularioFuncionario() {
    $("#nomeFuncionario").val("");
    $("#cpfFuncionario").val("");
    $("#idFuncionario").val("-1");
}

function limparFormularioReserva() {
    $("#nomeReserva").val("");
    $("#dataInicio").val("");
    $("#dataFim").val("");
    $("#idReserva").val("-1");
}

function limparFormularioQuarto() {
    $("#nomeQuarto").val("");
    $("#idQuarto").val("-1");
}

function limparFormularioCamas() {
    $("#marcaCama").val("");
    $("#modeloCama").val("");
    $("#idCama").val("-1");
}

//ATUALUZAR

function atualizarTabelaCargos(cargos) {
    $("#tabelaCargos").empty();
    for (let id in cargos) {
        $("#tabelaCargos").append(`
            <tr>
                <td>${id}</td>
                <td>${cargos[id].nome}</td>
                <td>
                    <button class="button" onclick="deletarCargo(${id})">Deletar</button>
                    <button class="button" onclick="editarCargo(${id})">Editar</button>
                </td>
            </tr>
        `);
    }
}

function atualizarTabelaHospedes(hospedes) {
    $("#tabelaHospedes").empty();
    for (let id in hospedes) {
        $("#tabelaHospedes").append(`<tr>
            <td>${id}</td>
            <td>${hospedes[id].nome}</td>
            <td>${hospedes[id].cpf}</td>
            <td>
                <button class="button" onclick="deletarHospede(${id})">Deletar</button>
                <button class="button" onclick="editarHospede(${id})">Editar</button>
            </td>
        </tr>`);
    }
}

function atualizarTabelaFuncionario(funcionarios) {
    $("#tabelaFuncionarios").empty();
    for (let id in funcionarios) {
        $("#tabelaFuncionarios").append(`<tr>
            <td>${id}</td>
            <td>${funcionarios[id].nome}</td>
            <td>${funcionarios[id].cpf}</td>
            <td>
                <button class="button" onclick="deletarFuncionario(${id})">Deletar</button>
                <button class="button" onclick="editarFuncionario(${id})">Editar</button>
            </td>
        </tr>`);
    }
}

function atualizarTabelaReservas(reservas) {
    $("#tabelaReservas").empty();
    for (let id in reservas) {
        $("#tabelaReservas").append(`<tr>
            <td>${reservas[id].id}</td>
            <td>${reservas[id].nomeReserva}</td>
            <td>${reservas[id].dataInicio}</td>
            <td>${reservas[id].dataFim}</td>
            <td>
                <button class="button" onclick="deletarReserva(${reservas[id].id})">Deletar</button>
                <button class="button" onclick="editarReserva(${reservas[id].id})">Editar</button>
            </td>
        </tr>`);
    }
}

function atualizarTabelaQuartos(quartos) {
    $("#tabelaQuartos").empty();
    for (let id in quartos) {
        $("#tabelaQuartos").append(`
            <tr>
                <td>${id}</td>
                <td>${quartos[id].descricao}</td>
                <td>
                    <button class="button" onclick="editarQuarto(${id})">Editar</button>
                    <button class="button" onclick="deletarQuarto(${id})">Deletar</button>
                </td>
            </tr>
        `);
    }
}

function atualizarTabelaCamas(camas) {
    $("#tabelaCamas").empty();
    for (let id in camas) {
        $("#tabelaCamas").append(`
            <tr>
                <td>${id}</td>
                <td>${camas[id].marca}</td>
                <td>${camas[id].modelo}</td>
                <td>
                    <button class="button" onclick="deletarCama(${id})">Deletar</button>
                    <button class="button" onclick="editarCama(${id})">Editar</button>
                </td>
            </tr>
        `);
    }
}
//DELETAR

function deletarHospede(id) {
    $.post(
        "http://localhost:8080/deletarHospede",
        { id: id },
        function (retorno) {
            console.log(retorno);
            atualizarTabelaHospedes(retorno);
        }
    );
}

function deletarCargo(id) {
    $.post(
        "http://localhost:8080/cargo/deletar",
        { id: id },
        function (retorno) {
            console.log(retorno);
            atualizarTabelaCargos(retorno);
        }
    );
}

function deletarFuncionario(id) {
    $.post(
        "http://localhost:8080/funcionario/deletar",
        { id: id },
        function (retorno) {
            console.log(retorno);
            atualizarTabelaFuncionario(retorno);
        }
    );
}


function deletarReserva(id) {
    $.ajax({
        url: "http://localhost:8080/reserva/deletar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ id: id }),
        success: function (retorno) {
            console.log(retorno);
            atualizarTabelaReservas(retorno);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao deletar reserva:", status, error);
        }
    });
}

function deletarQuarto(id) {
    $.post(
        "http://localhost:8080/quarto/deletar",
        JSON.stringify({ numero: id }),
        function (retorno) {
            console.log(retorno);
            atualizarTabelaQuartos(retorno);
        },
        "json"
    );
}

function deletarCama(id) {
    $.post(
        "http://localhost:8080/cama/deletar",
        { id: id },
        function (retorno) {
            console.log(retorno);
            atualizarTabelaCamas(retorno);
        }
    );
}
