package com.gitlab.ifcanoas.ds3git.objetos;

public class Cargo {
    private int id;
    private String nome;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override /*
               * toString() em Java é um método herdado da classe
               * Object que retorna uma representação em forma de string do objeto.
               */
    public String toString() {
        return "Cargo{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
