package com.gitlab.ifcanoas.ds3git;

import org.springframework.web.bind.annotation.*;

import com.gitlab.ifcanoas.ds3git.objetos.Reserva;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
public class ReservaController {

    private HashMap<Integer, Reserva> reservas = new HashMap<>();

    @PostMapping("/reserva/criar")
    public HashMap<Integer, Reserva> criarReserva(@RequestBody Reserva reserva) {
        int id = this.reservas.size();
        reserva.setId(id);
        this.reservas.put(id, reserva);
        return this.reservas;
    }

    @PostMapping("/reserva/atualizar")
    public HashMap<Integer, Reserva> atualizarReserva(@RequestBody Reserva reserva) {
        int id = reserva.getId();
        this.reservas.put(id, reserva);
        return this.reservas;
    }

    @GetMapping("/reservas")
    public HashMap<Integer, Reserva> getAll() {
        return reservas;
    }

    @GetMapping("/reservas/{id}")
    public Reserva obterReserva(@PathVariable int id) {
        return this.reservas.get(id);
    }

    @PostMapping("/reserva/deletar")
    public HashMap<Integer, Reserva> deletarReserva(@RequestBody Reserva reserva) {
        int id = reserva.getId();
        this.reservas.remove(id);
        return this.reservas;
    }
}