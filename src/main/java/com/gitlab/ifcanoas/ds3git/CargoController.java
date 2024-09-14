package com.gitlab.ifcanoas.ds3git;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.gitlab.ifcanoas.ds3git.objetos.Cargo;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
public class CargoController {

    private HashMap<Integer, Cargo> cargos = new HashMap<>(); // HashMap para armazenar os cargos

    @PostMapping("/cargo/criar")
    public HashMap<Integer, Cargo> criarCargo(@RequestBody Cargo cargo) {
        int id = this.cargos.size();
        cargo.setId(id);
        this.cargos.put(id, cargo);
        return this.cargos;
    }

    @GetMapping("/cargos")
    public HashMap<Integer, Cargo> getAll() {
        return this.cargos;
    }

    @GetMapping("/cargos/{id}")
    public Cargo getOne(@PathVariable int id) {
        return this.cargos.get(id);
    }

    @PostMapping("/cargo/deletar")
    public HashMap<Integer, Cargo> deletarCargo(Cargo cargo) {
        int id = cargo.getId(); // pega o ID do cargo pra ser deletado
        cargos.remove(id);
        return this.cargos;
    }

    @PostMapping("/cargo/atualizar")
    public HashMap<Integer, Cargo> atualizarCargo(@RequestBody Cargo cargo) {
        int id = cargo.getId();
        cargos.put(id, cargo);
        return this.cargos;
    }

}
