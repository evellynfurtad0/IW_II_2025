<?php
    class Produto {
      private $Nome;
      private $Preco;
      private $Quantidade;
 
      public function __construct($nome,$preco,$quantidade){
        $this->Nome =$nome;
        $this->Preco =$preco;
        $this->Quantidade =$quantidade;
     }

    public function getNome(){
       return $this->Nome;
    }
    public function setNome(){
        
    }
    public function adicionarEstoque($qtd){
        if ($qntd> 0){
            return $this->Quantidade += $qtd;
        }
        else{
            echo"Digite um número maior que 0!";
        }
    }
    public function removerEstoque($qtd){
        if ($qntd> 0){
            return $this->Quantidade -= $qtd;
        }
        else{
            echo"Digite um número maior que 0!";
        }

    }
    public function mostrarDetalhes(){
        echo "NOME: ".$this->Nome . "<br>";
        echo "PREÇO: ".$this->Preco . "<br>";
        echo "QUANTIDADE: ".$this->Quantidade . "<br>";


    }
   }
?>