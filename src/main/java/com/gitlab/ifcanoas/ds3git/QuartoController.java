package com.gitlab.ifcanoas.ds3git;

import java.util.HashMap;
import org.springframework.web.bind.annotation.RestController;

import com.gitlab.ifcanoas.ds3git.objetos.Quarto;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*") // Resolve problemas de CORS
public class QuartoController {

    private int id = 0;
    private HashMap<Integer, Quarto> quartos = new HashMap<>();

    @PostMapping("/quarto/criar")
    public HashMap<Integer, Quarto> create(@RequestBody Quarto quarto) {
        this.id++;
        quarto.setNumero(this.id);
        this.quartos.put(this.id, quarto);
        return this.quartos;
    }

    @GetMapping("/quartos")
    public HashMap<Integer, Quarto> getAll() {
        return this.quartos;
    }

    @GetMapping("/quarto/{id}")
    public Quarto getOne(@PathVariable int id) {
        return this.quartos.get(id);
    }

    @PostMapping("/quarto/atualizar")
    public HashMap<Integer, Quarto> update(@RequestBody Quarto quarto) {
        int id = quarto.getNumero();
        this.quartos.put(id, quarto);
        return this.quartos;
    }

    @PostMapping("/quarto/deletar")
    public HashMap<Integer, Quarto> deletar(Quarto quarto) {
        int id = quarto.getNumero();
        this.quartos.remove(id);

        return this.quartos;
    }

}
