Arquitetura de software do TCC

===================
Índice Analítico

---

- 1. [Introdução](#1-introdução)
  - 1.1 [Finalidade](#11-finalidade)
  - 1.2 [Escopo](#12-escopo)
  - 1.3 [Definições, Acrônimos e Abreviações](#13-definições-acrônimos-e-abreviações)
  - 1.4 [Referências](#14-referências)
  - 1.5 [Visão Geral](#15-visão-geral)
- 2. [Representação da Arquitetura](#2-representação-da-arquitetura)
- 3. [Metas e Restrições de Arquitetura](#3-metas-e-restrições-de-arquitetura)
- 4. [Visão de Casos de Uso](#4-visão-de-casos-de-uso)
  - 4.1 [Realizações de Casos de Uso](#41-realizações-de-casos-de-uso)
- 5. [Visão Lógica](#5-visão-lógica)
  - 5.1 [Visão Geral](#51-visão-geral)
  - 5.2 [Pacotes de Design Significativos do Ponto de Vista da Arquitetura](#52-pacotes-de-design-significativos-do-ponto-de-vista-da-arquitetura)
- 6. [Visão de Processos](#6-visão-de-processos)
- 7. [Visão de Implantação](#7-visão-de-implantação)
- 8. [Visão de Implementação](#8-visão-de-implementação)
  - 8.1 [Visão Geral](#81-visão-geral)
  - 8.2 [Camadas](#82-camadas)
- 9. [Visão de Dados (opcional)](#9-visão-de-dados-opcional)
- 10. [Tamanho e Desempenho](#10-tamanho-e-desempenho)
- 11. [Qualidade](#11-qualidade)

## Documento de Arquitetura de Software

## 1. Introdução

_[A introdução do Documento de Arquitetura de Software deve apresentar uma visão geral de todo o Documento de Arquitetura de Software. Ela deve incluir a finalidade, o escopo, as definições, os acrônimos, as abreviações, as referências e uma visão geral do Documento de Arquitetura de Software.]_

### 1.1 Finalidade

Este documento apresenta uma visão geral abrangente da arquitetura do sistema e utiliza uma série de visões arquiteturais diferentes para ilustrar os diversos aspectos do sistema. Sua intenção é capturar e transmitir as decisões significativas do ponto de vista da arquitetura que foram tomadas em relação ao sistema.

_[Esta seção define a finalidade do Documento de Arquitetura de Software, na documentação geral do projeto, e contém uma breve descrição da estrutura do documento. Os públicos específicos do documento devem ser identificados, com uma indicação de como devem usá-lo.]_

### 1.2 Escopo

_[Faça uma breve descrição da aplicação do Documento de Arquitetura de Software; o que é afetado ou influenciado por este documento.]_

### 1.3 Definições, Acrônimos e Abreviações

_[Esta subseção deve apresentar as definições de todos os termos, acrônimos e abreviações necessários para a correta interpretação do Documento de Arquitetura de Software. Essas informações podem ser fornecidas mediante referência ao Glossário do projeto.]_

### 1.4 Referências

_[Esta subseção deve apresentar uma lista completa de todos os documentos mencionados no Documento de Arquitetura de Software. Cada documento deve ser identificado por título, número de relatório (se aplicável), data e organização responsável pela publicação. Especifique as fontes das quais é possível obter referências. Essas informações podem ser fornecidas por um anexo ou outro documento.]_

### 1.5 Visão Geral

_[Esta subseção deve descrever o conteúdo restante do Documento de Arquitetura de Software e explicar como o Documento de Arquitetura de Software está organizado.]_

## 2. Representação da Arquitetura

_[Esta seção descreve qual é a arquitetura de software do sistema atual e como ela é representada. Nas Visões de Casos de Uso, Lógica, do Processo, de Implantação e de Implementação, este documento enumera as visões necessárias e, para cada uma delas, explica os tipos de elementos do modelo que contém.]_

## 3. Metas e Restrições de Arquitetura

_[Esta seção descreve os requisitos de software e os objetivos que têm um impacto significativo na arquitetura, como proteção, segurança, privacidade, uso de um produto desenvolvido internamente e adquirido pronto para ser usado, portabilidade, distribuição e reutilização. Ela também captura as restrições especiais que podem ser aplicáveis: estratégia de design e implementação, ferramentas de desenvolvimento, estrutura das equipes, cronograma, código-fonte legado e assim por diante.]_

## 4. Visão de Casos de Uso

_[Esta seção lista os casos de uso ou cenários do modelo de casos de uso se eles representam uma funcionalidade central e significativa do sistema final ou se têm uma ampla cobertura de arquitetura, ou seja, se experimentam muitos elementos arquiteturais ou se enfatizam ou ilustram um determinado ponto frágil da arquitetura.]_

### 4.1 Realizações de Casos de Uso

_[Esta seção ilustra o funcionamento do software, apresentando algumas realizações (ou cenários) de casos de uso selecionadas e explica como os diversos elementos do modelo de design contribuem para a respectiva funcionalidade.]_

## 5. Visão Lógica

_[Esta seção descreve as partes significativas do ponto de vista da arquitetura do modelo de design, como sua divisão em subsistemas e pacotes. Além disso, para cada pacote significativo, ela mostra sua divisão em classes e utilitários de classe. Apresente as classes significativas do ponto de vista da arquitetura e descreva suas responsabilidades, bem como alguns relacionamentos, operações e atributos de grande importância.]_

### 5.1 Visão Geral

[Esta subseção descreve toda a decomposição do modelo de design em termos de camadas e de hierarquia de pacotes.]

### 5.2 Pacotes de Design Significativos do Ponto de Vista da Arquitetura

\*[Para cada pacote significativo, inclua uma subseção com o respectivo nome, uma breve descrição e um diagrama com todos os pacotes e classes significativos nele contidos.

Para cada classe significativa no pacote, inclua o respectivo nome, uma breve descrição e, opcionalmente, uma descrição de algumas de suas responsabilidades, operações e atributos mais importantes.]\*

## 6. Visão de Processos

_[Esta seção descreve a decomposição do sistema em processos leves (threads simples de controle) e processos pesados (agrupamentos de processos leves). Organize a seção em grupos de processos que se comunicam ou interagem. Descreva os modos principais de comunicação entre processos, como transmissão de mensagens e interrupções.]_

## 7. Visão de Implantação

_[Esta seção descreve uma ou mais configurações da rede física (hardware) na qual o software é implantado e executado. Ela é uma visão do Modelo de Implantação. Para cada configuração, ela deve indicar no mínimo os nós físicos (computadores, CPUs) que executam o software e as respectivas interconexões (barramento, LAN, ponto a ponto e assim por diante.) Inclua também um mapeamento dos processos da Visão de Processos nos nós físicos.]_

## 8. Visão de Implementação

_[Esta seção descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.]_

### 8.1 Visão Geral

_[Esta subseção nomeia e define as diversas camadas e o seu conteúdo, as regras que determinam a inclusão em uma camada específica e as fronteiras entre as camadas. Inclua um diagrama de componentes que mostre os relacionamentos entre as camadas.]_

### 8.2 Camadas

_[Para cada camada, inclua uma subseção com o respectivo nome, uma lista dos subsistemas localizados na camada e um diagrama de componentes.]_

## 9. Visão de Dados (opcional)

_[Uma descrição da perspectiva de armazenamento de dados persistentes do sistema. Esta seção será opcional se os dados persistentes forem poucos ou inexistentes ou se a conversão entre o Modelo de Design e o Modelo de Dados for trivial.]_

## 10. Tamanho e Desempenho

_[Uma descrição das principais características de dimensionamento do software que têm um impacto na arquitetura, bem como as restrições do desempenho desejado.]_

## 11. Qualidade

_[Uma descrição de como a arquitetura do software contribui para todos os recursos (exceto a funcionalidade) do sistema: extensibilidade, confiabilidade, portabilidade e assim por diante. Se essas características tiverem significado especial, como, por exemplo, implicações de proteção, segurança ou privacidade, elas devem ser claramente delineadas.]_
