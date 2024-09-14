package com.gitlab.ifcanoas.ds3git;

import java.util.HashMap;

import org.springframework.web.bind.annotation.*;

import com.gitlab.ifcanoas.ds3git.objetos.Cama;

@RestController
@CrossOrigin(origins = "*")
public class CamaController {

    private int id = 0;
    private HashMap<Integer, Cama> camas = new HashMap<>();

    @PostMapping("/cama/criar")
    public HashMap<Integer, Cama> create(@RequestBody Cama cama) {
        this.id++;
        camas.put(this.id, cama);
        return camas;
    }

    @GetMapping("/camas")
    public HashMap<Integer, Cama> getAll() {
        return camas;
    }

    @GetMapping("/cama/{id}")
    public Cama getOne(@PathVariable int id) {
        return camas.get(id);
    }

    @PostMapping("/cama/atualizar")
    public HashMap<Integer, Cama> update(@RequestBody Cama cama, @RequestParam int id) {
        camas.put(id, cama);
        return camas;
    }

    @PostMapping("/cama/deletar")
    public HashMap<Integer, Cama> deletar(@RequestParam int id) {
        camas.remove(id);
        return camas;
    }
}
