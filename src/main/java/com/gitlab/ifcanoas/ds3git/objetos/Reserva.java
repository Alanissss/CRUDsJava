package com.gitlab.ifcanoas.ds3git.objetos;

import java.util.Date;

public class Reserva {
    private int id;
    private String nomeReserva;
    private Date dataInicio;
    private Date dataFim;

    public Reserva(int id, String nomeReserva, Date dataInicio, Date dataFim) {
        this.id = id;
        this.nomeReserva = nomeReserva;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public String getNomeReserva() {
        return nomeReserva;
    }

    public void setNomeReserva(String nomeReserva) {
        this.nomeReserva = nomeReserva;
    }

    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", nomeReserva=" + nomeReserva +
                ", dataInicio=" + dataInicio +
                ", dataFim=" + dataFim +
                '}';
    }

}
