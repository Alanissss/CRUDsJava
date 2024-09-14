package com.gitlab.ifcanoas.ds3git;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gitlab.ifcanoas.ds3git.objetos.Funcionario;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
public class FuncionarioController {

    private HashMap<Integer, Funcionario> funcionarios = new HashMap<>();

    @PostMapping("/criarFuncionario")
    public HashMap<Integer, Funcionario> criarFuncionario(Funcionario funcionario) {
        int id = this.funcionarios.size();
        funcionario.setId(id);
        this.funcionarios.put(id, funcionario);
        return this.funcionarios;
    }

    @GetMapping("/funcionarios")
    public HashMap<Integer, Funcionario> getAll() {
        return this.funcionarios;
    }

    @GetMapping("/funcionarios/{id}")
    public Funcionario getOne(@PathVariable int id) {
        return this.funcionarios.get(id);
    }

    @PostMapping("/funcionario/deletar")
    public HashMap<Integer, Funcionario> deletarFuncionario(Funcionario funcionario) {
        int id = funcionario.getId();
        this.funcionarios.remove(id);
        return this.funcionarios;
    }

    @PostMapping("/funcionario/atualizar")
    public HashMap<Integer, Funcionario> atualizarFuncionario(Funcionario funcionario) {
        int id = funcionario.getId();
        this.funcionarios.put(id, funcionario);
        return this.funcionarios;
    }
}
