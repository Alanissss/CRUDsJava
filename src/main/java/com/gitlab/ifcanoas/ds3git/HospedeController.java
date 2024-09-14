package com.gitlab.ifcanoas.ds3git;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gitlab.ifcanoas.ds3git.objetos.Hospede;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*") // Resolve problemas de CORS (ATAQUE DDOS)
public class HospedeController {
    // colocaremos as tais das annotations os (pragmas) cod embutidos nos programas
    // antes de compilar
    // puxa os cód
    // alteração de dados usando post

    // utilizar lista de hashmap

    private HashMap<Integer, Hospede> hospedes = new HashMap<>();

    @PostMapping("/criarHospede")
    public HashMap<Integer, Hospede> criar(Hospede hospede) {
        // postMethodName, nome da função
        int id = this.hospedes.size();
        hospede.setId(id);
        this.hospedes.put(id, hospede);
        return this.hospedes;
    }

    @PostMapping("/deletarHospede")
    public HashMap<Integer, Hospede> deletar(Hospede hospede) {
        // deletaremos o hospede
        int id = hospede.getId();
        this.hospedes.remove(id);
        return this.hospedes;
    }

    @GetMapping("/hospede/{id}")
    public Hospede getOne(@PathVariable int id) {
        return this.hospedes.get(id);
    }

    @GetMapping("/hospedes")
    public HashMap<Integer, Hospede> getAll() {
        return this.hospedes;
    }

    @PostMapping("/hospede/atualizar")
    public HashMap<Integer, Hospede> update(Hospede hospede) {
        int id = hospede.getId();
        this.hospedes.put(id, hospede);
        return this.hospedes;
    }

}
