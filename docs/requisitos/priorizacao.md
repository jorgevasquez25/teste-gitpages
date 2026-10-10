# Priorização dos Requisitos

## Avaliação do Valor de Negócio

A avaliação de negócio dos requisitos foi realizada por meio de um formulário de priorização, respondido pelos principais stakeholders, a diretora e a coordenadora, representando o cliente. Foram considerados os critérios de **importância para a resolução do problema central** e **urgência (prioridade)**, resultando na tabela de valor de negócio dos requisitos.

Devido à indisponibilidade dos stakeholders para uma avaliação mais detalhada, as classificações e interpretações apresentam certo nível de generalização. O grupo se compromete a validar posteriormente a tabela com os stakeholders, aprimorando principalmente a especificidade da coluna de **Interpretação**.

### Legenda MoSCoW

| Pts | Categoria | Interpretação |
|----:|-----------|---------------|
| 4 | **Must** | É fundamental no sistema; sem essa funcionalidade presente, não será possível resolver o problema. |
| 3 | **Should** | Itens importantes, de alto valor, mas que não são vitais para a primeira versão. |
| 2 | **Could** | É uma vontade do cliente, mas não é fundamental para a resolução do problema, podendo ser adiado. |

### Tabela de valor de negócio

| ID | Pts | Categoria MoSCoW |
|----|----:|------------------|
| RF1 | 2 | Could |
| RF2 | 2 | Could |
| RF3 | 2 | Could |
| RF4 | 2 | Could |
| RF5 | 4 | Must |
| RF6 | 4 | Must |
| RF7 | 4 | Must |
| RF8 | 4 | Must |
| RF9 | 4 | Must |
| RF10 | 3 | Should |
| RF11 | 2 | Could |
| RF12 | 2 | Could |
| RF13 | 4 | Must |
| RF14 | 4 | Must |
| RF15 | 3 | Should |
| RF16 | 3 | Should |
| RF17 | 3 | Should |
| RF18 | 4 | Must |
| RF19 | 2 | Could |
| RF20 | 2 | Could |
| RF21 | 4 | Must |
| RF22 | 4 | Must |
| RF23 | 3 | Should |
| RF24 | 4 | Must |
| RNF1 | 4 | Must |
| RNF2 | 4 | Must |
| RNF3 | 3 | Should |
| RNF4 | 2 | Could |
| RNF5 | 4 | Must |
| RNF6 | 4 | Must |
| RNF7 | 4 | Must |
| RNF8 | 4 | Must |
| RNF9 | 4 | Must |
| RNF10 | 3 | Should |

## Avaliação do Esforço Técnico

A avaliação técnica considera os seguintes elementos:

- Esforço técnico necessário de desenvolvimento (da implementação inicial até a testagem);
- Complexidade técnica;
- Domínio e capacidade técnica da equipe.

### Escalas utilizadas

=== "1. Esforço"

    **Tempo provável de ser gasto para implementar.**

    | Pontuação | Descrição |
    |----------:|-----------|
    | 1 | Baixo — até 2 horas |
    | 2 | Médio — entre 2 e 6 horas |
    | 3 | Alto — entre 6 e 12 horas |
    | 4 | Muito alto — mais de 12 horas |

=== "2. Complexidade"

    **Nível de esforço cognitivo para se realizar a tarefa, grau de dependência e incerteza.**

    | Pontuação | Descrição |
    |----------:|-----------|
    | 1 | Solução conhecida, poucas dependências |
    | 2 | Exigência de investigação e integração |
    | 3 | Muitas dependências e incertezas técnicas |
    | 4 | Apresentação de tecnologia pouco dominada, integração crítica e muita incerteza |

=== "3. Domínio e Capacidade"

    **Nível de experiência e conhecimento dos membros da equipe.**

    | Pontuação | Descrição |
    |----------:|-----------|
    | 1 | Pleno domínio |
    | 2 | Experiência suficiente, pouca aplicação |
    | 3 | Necessidade de experiência considerável |
    | 4 | Não há experiência nem os recursos necessários |

!!! warning "Pendência"
    Falta definir a origem de cada uma das três escalas, para deixar claro a qualquer leitor de onde vieram essas medidas.

### Matriz de avaliação

| ID | Esforço técnico | Complexidade | Capacidade da equipe | Média | Final (média arredondada) |
|----|----:|----:|----:|----:|----:|
| RF01 | 2 | 3 | 1 | 2.6 | 3 |
| RF02 | 2 | 3 | 1 | 2 | 2 |
| RF03 | 2 | 3 | 1 | 2 | 2 |
| RF04 | 2 | 3 | 1 | 2 | 2 |
| RF05 | 1 | 2 | 1 | 1.3 | 1 |
| RF06 | 1 | 2 | 2 | 1.6 | 2 |
| RF07 | 1 | 2 | 2 | 1.6 | 2 |
| RF08 | 3 | 3 | 2 | 2.6 | 3 |
| RF09 | 3 | 3 | 2 | 2.6 | 3 |
| RF10 | 3 | 3 | 2 | 2.6 | 3 |
| RF11 | 1 | 1 | 1 | 1 | 1 |
| RF12 | 1 | 1 | 1 | 1 | 1 |
| RF13 | 1 | 1 | 2 | 1.3 | 1 |
| RF14 | 1 | 2 | 2 | 1.6 | 2 |
| RF15 | 1 | 2 | 1 | 1.3 | 1 |
| RF16 | 1 | 2 | 4 | 2.3 | 2 |
| RF17 | 2 | 2 | 2 | 2 | 2 |
| RF18 | 1 | 1 | 1 | 1 | 1 |
| RF19 | 1 | 1 | 1 | 1 | 1 |
| RF20 | 1 | 1 | 2 | 1.3 | 1 |
| RF21 | 1 | 1 | 1 | 1 | 1 |
| RF22 | 1 | 1 | 1 | 1 | 1 |
| RF23 | 1 | 1 | 1 | 1 | 1 |
| RF24 | 1 | 1 | 1 | 1 | 1 |
| RNF1 | 3 | 4 | 4 | 3.6 | 4 |
| RNF2 | 1 | 1 | 2 | 1.3 | 1 |
| RNF3 | 2 | 2 | 3 | 2.3 | 2 |
| RNF4 | 1 | 2 | 1 | 1.3 | 1 |
| RNF5 | 2 | 3 | 3 | 2.6 | 3 |
| RNF6 | 2 | 3 | 3 | 2.6 | 3 |
| RNF7 | 2 | 3 | 3 | 2.6 | 3 |
| RNF8 | 2 | 3 | 3 | 2.6 | 3 |
| RNF9 | 2 | 2 | 2 | 2 | 2 |
| RNF10 | 2 | 2 | 2 | 2 | 2 |

## Consolidação das Avaliações

| ID | Requisito | Justificativa do cliente | V. Negócio | Esforço | Complexidade | Lacuna de Capacidade | Esforço técnico consolidado |
|----|-----------|--------------------------|----:|----:|----:|----:|----:|
| RF1 | Disponibilizar quadro de avisos | Se manifestou como um desejo da cliente | 2 | 2 | 3 | 1 | 2.6 |
| RF2 | Lançar avisos | Se manifestou como um desejo da cliente | 2 | 2 | 3 | 1 | 2 |
| RF3 | Exibir avisos | Se manifestou como um desejo da cliente | 2 | 2 | 3 | 1 | 2 |
| RF4 | Apagar avisos | Se manifestou como um desejo da cliente | 2 | 2 | 3 | 1 | 2 |
| RF5 | Cadastrar usuários | Necessidade da cliente, para cadastrar possíveis novos usuários | 4 | 1 | 2 | 1 | 1.3 |
| RF6 | Realizar login | O sistema deve ser protegido por login | 4 | 1 | 2 | 2 | 1.6 |
| RF7 | Realizar logout | O logout é necessário para garantir a segurança física do computador contra acessos indevidos | 4 | 1 | 2 | 2 | 1.6 |
| RF8 | Cadastrar card de aluno | Função essencial, visa resolver o problema principal | 4 | 3 | 3 | 2 | 2.6 |
| RF9 | Preenchimento de fichas | Função essencial, visa resolver o problema principal | 4 | 3 | 3 | 2 | 2.6 |
| RF10 | Editar fichas de card | Função essencial, visa resolver o problema principal | 3 | 3 | 3 | 2 | 2.6 |
| RF11 | Inativar card de aluno | Útil para organização interna | 2 | 1 | 1 | 1 | 1 |
| RF12 | Reativar card de aluno | Útil para organização interna | 2 | 1 | 1 | 1 | 1 |
| RF13 | Vincular aluno a turma | Útil para organização interna | 4 | 1 | 1 | 2 | 1.3 |
| RF14 | Anexar documentos | Função essencial, visa resolver o problema principal | 4 | 1 | 2 | 2 | 1.6 |
| RF15 | Editar documento | Função essencial, visa resolver o problema principal | 3 | 1 | 2 | 1 | 1.3 |
| RF16 | Baixar fichas e documentos | Função essencial, visa resolver o problema principal | 3 | 1 | 2 | 4 | 2.3 |
| RF17 | Apresentar histórico de edições | Útil para organização interna | 3 | 2 | 2 | 2 | 2 |
| RF18 | Cadastrar etapa | Útil para organização interna | 4 | 1 | 1 | 1 | 1 |
| RF19 | Inativar turma e etapa | Útil para organização interna | 2 | 1 | 1 | 1 | 1 |
| RF20 | Vincular turma à etapa | Útil para organização interna | 2 | 1 | 1 | 2 | 1.3 |
| RF21 | Buscar aluno pelo nome | Função essencial, visa resolver o problema principal | 4 | 1 | 1 | 1 | 1 |
| RF22 | Buscar turmas e etapas | Útil para organização interna | 4 | 1 | 1 | 1 | 1 |
| RF23 | Possibilitar salvamento de dados | Função essencial, visa resolver o problema principal | 3 | 1 | 1 | 1 | 1 |
| RF24 | Cadastrar turma | Útil para organização interna | 4 | 1 | 1 | 1 | 1 |
| RNF1 | Privacidade de dados e retenção segura | Necessário, obrigação legal | 4 | 3 | 4 | 4 | 3.6 |
| RNF2 | Restrição de acesso não autenticado | Necessário, proteção contra acessos indesejados | 4 | 1 | 1 | 2 | 1.3 |
| RNF3 | Interface responsiva e adaptável a múltiplos dispositivos | Útil, mas não essencial para primeiro uso | 3 | 2 | 2 | 3 | 2.3 |
| RNF4 | Interface com suporte a modo escuro alternável | Útil, mas não essencial para primeiro uso | 2 | 1 | 2 | 1 | 1.3 |
| RNF5 | Tempo de resposta do sistema ao logar | Necessário, a velocidade do sistema foi uma queixa forte do cliente | 4 | 2 | 3 | 3 | 2.6 |
| RNF6 | Tempo de resposta do sistema ao buscar aluno | Necessário, a velocidade do sistema foi uma queixa forte do cliente | 4 | 2 | 3 | 3 | 2.6 |
| RNF7 | Tempo de resposta do sistema para buscar turmas ou etapas | Necessário, a velocidade do sistema foi uma queixa forte do cliente | 4 | 2 | 3 | 3 | 2.6 |
| RNF8 | Tempo de resposta para salvar uma ficha | Necessário, a velocidade do sistema foi uma queixa forte do cliente | 4 | 2 | 3 | 3 | 2.6 |
| RNF9 | Disponibilidade do sistema | Necessário, o sistema deve permanecer acessível durante todo o expediente | 4 | 2 | 2 | 2 | 2 |
| RNF10 | Acessos múltiplos | Essencial, para acompanhar a necessidade do cliente | 3 | 2 | 2 | 2 | 2 |
