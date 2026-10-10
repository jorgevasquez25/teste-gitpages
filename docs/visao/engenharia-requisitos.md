# 5. Engenharia de Requisitos

Nesta seção, detalhamos a aplicação das práticas de Engenharia de Requisitos (ER) ao longo do ciclo de vida do projeto. Conforme definido na estratégia do projeto, adotamos o processo OpenUP. Nas subseções a seguir, apresentamos como essas práticas estão distribuídas ao longo das quatro fases desse processo: Concepção, Elaboração, Construção e Transição.

## 5.1 Atividades e Técnicas de ER

### 5.1.1 Concepção

#### Prática: Elicitação e Descoberta

- **Técnicas aplicadas:** Entrevistas e Análise Documental.
- **Como foi aplicado:** realizamos entrevistas por videochamadas com a diretora, a coordenadora e as secretárias da Creche Estação Vida para compreender o processo atual de cadastro, armazenamento e consulta. Em paralelo, analisamos as fichas de matrícula físicas utilizadas pela instituição.
- **Resultado esperado:** requisitos de alto nível identificados e contexto do problema de gestão de matrículas compreendido.

**Evidências:**

- [Inserir link para a ata/gravação da entrevista]
- [Inserir link para a análise documental / fotos das fichas]

#### Prática: Análise e Consenso

- **Técnicas aplicadas:** Priorização de Requisitos (Método MoSCoW).
- **Como foi aplicado:** os requisitos identificados foram analisados e priorizados de acordo com a sua importância para a creche, dando preferência às necessidades que apresentam maior impacto na rotina administrativa.
- **Resultado esperado:** escopo principal do MVP acordado com a direção e a secretaria da creche.

**Evidências:** [Priorização dos requisitos](../requisitos/priorizacao.md)

#### Prática: Declaração

- **Técnicas aplicadas:** Elaboração do Documento de Visão e da Lista de Requisitos.
- **Como foi aplicado:** foi elaborado o documento de Visão, apresentando o problema identificado, os objetivos da solução e o escopo inicial do sistema. Adicionalmente, foi criada uma lista inicial contendo as principais funcionalidades que deverão ser contempladas pelo sistema.
- **Resultado esperado:** objetivos da solução e escopo do sistema documentados de forma clara e concisa.

**Evidências:** [Lista de requisitos](../requisitos/index.md)

#### Prática: Representação

- **Técnicas a serem aplicadas:** Casos de Uso de Alto Nível.
- **Como será aplicado:** serão elaborados casos de uso simplificados para representar as principais funcionalidades identificadas, como cadastrar aluno, consultar ficha e atualizar informações.
- **Resultado esperado:** funcionalidades críticas mapeadas e representadas de forma concisa.

**Evidências:** [Inserir link]

#### Prática: Organização e Atualização

- **Técnicas aplicadas:** Estruturação de Rastreabilidade (Catálogo Inicial de Requisitos).
- **Como foi aplicado:** foi criada a estrutura de rastreabilidade dos requisitos funcionais e não funcionais do sistema. Além disso, os primeiros requisitos estabelecidos foram organizados nessa mesma estrutura.
- **Resultado esperado:** catálogo inicial de requisitos estruturado.

**Evidências:** [Inserir link para o catálogo inicial dos requisitos]

### 5.1.2 Elaboração

#### Prática: Elicitação e Descoberta

- **Técnica aplicada:** Entrevistas de Aprofundamento.
- **Como foi aplicado:** foram realizadas novas entrevistas com as secretárias e demais stakeholders para esclarecer dúvidas e obter informações mais detalhadas sobre os requisitos levantados na Concepção.
- **Resultado esperado:** requisitos refinados e compreendidos em detalhe para mitigar riscos durante a implementação.

**Evidências:** [Inserir link]

#### Prática: Análise e Consenso

- **Técnicas aplicadas e a aplicar:** Análise de Impacto e Priorização (realizadas); Prototipação para Alinhamento (planejada).
- **Como está sendo aplicado:** os requisitos foram analisados para identificar conflitos, ambiguidades e dependências, sendo novamente priorizados com base no valor para a instituição e nos riscos de implementação. Além disso, **serão utilizados** protótipos preliminares em discussões com as secretárias como ferramenta de apoio visual para facilitar a compreensão, o debate e a obtenção de consenso sobre a estrutura da solução.
- **Resultado esperado:** conflitos resolvidos e consenso estabelecido sobre a viabilidade técnica da implementação e os fluxos da interface.

**Evidências:** [Inserir link]

#### Prática: Declaração

- **Técnicas em aplicação:** Detalhamento Sob Demanda (Casos de Uso Detalhados e Critérios de Aceite).
- **Como está sendo aplicado:** os requisitos de maior prioridade **estão sendo** detalhados progressivamente, aplicando a escrita de casos de uso detalhados e a definição de critérios de aceite, com o objetivo de evitar uma especificação excessiva e antecipada.
- **Resultado esperado:** requisitos prioritários especificados com o nível exato de detalhe necessário para o desenvolvimento.

**Evidências:** [Inserir link]

#### Prática: Representação

- **Técnicas a serem aplicadas:** Refinamento de Casos de Uso e Prototipação de Interface.
- **Como será aplicado:** os casos de uso iniciais **serão** refinados para representar de forma mais detalhada as interações entre os usuários e o sistema. Em paralelo, **serão** desenhados protótipos das principais telas para representar a solução visualmente e materializar a organização das informações.
- **Resultado esperado:** interações detalhadas e telas representadas visualmente para guiar a equipe de desenvolvimento.

**Evidências:** [Inserir link]

#### Prática: Verificação e Validação

- **Técnicas a serem aplicadas:** Revisões com Stakeholders e Demonstrações.
- **Como será aplicado:** os requisitos refinados **serão revisados** junto aos usuários para verificar se estão de acordo com as necessidades identificadas. Protótipos e versões iniciais das funcionalidades **serão apresentados** aos stakeholders em sessões de demonstração para obter feedback e identificar possíveis ajustes.
- **Resultado esperado:** confirmação de que as interfaces propostas e os fluxos desenhados atendem às expectativas dos usuários.

**Evidências:** [Inserir link]

#### Prática: Organização e Atualização

- **Técnicas em aplicação:** Gerenciamento de Mudanças e Atualização de Rastreabilidade.
- **Como está sendo aplicado:** a Matriz de Rastreabilidade **está sendo mantida** em atualização contínua. Conforme os requisitos **são refinados**, as alterações de escopo, novas dependências e repriorizações **estão sendo registradas** na matriz para manter o controle e o histórico do projeto.
- **Resultado esperado:** alterações de escopo e novas dependências documentadas, mantendo a integridade e o controle do projeto.

**Evidências:** [Inserir link]

### 5.1.3 Construção

#### Prática: Elicitação e Descoberta

- **Técnicas aplicadas:** Esclarecimento Contínuo.
- **Como foi aplicado:** durante as iterações de desenvolvimento, foram realizadas comunicações diretas com os stakeholders para esclarecer dúvidas pontuais sobre as regras de negócio, garantindo que a equipe não ficasse bloqueada durante a implementação.
- **Resultado esperado:** dúvidas pontuais de negócio resolvidas para não travar o desenvolvimento.

**Evidências:** [Inserir link]

#### Prática: Análise e Consenso

- **Técnicas em aplicação:** Avaliação de Mudanças (Análise de Impacto).
- **Como está sendo aplicado:** caso surjam novos pedidos ou alterações nos requisitos durante o desenvolvimento, **está sendo aplicada** a técnica de Análise de Impacto para avaliar a viabilidade técnica, o custo e o impacto dessas mudanças no escopo da iteração atual.
- **Resultado esperado:** decisão tomada sobre a viabilidade técnica e o impacto de aceitar mudanças durante a iteração.

**Evidências:** [Inserir link]

#### Prática: Declaração

- **Técnicas a serem aplicadas:** Especificação Sob Demanda (Critérios de Aceite e atualização de Casos de Uso).
- **Como será aplicado:** evitando um detalhamento antecipado desnecessário, os requisitos selecionados para a iteração atual **serão** especificados no momento certo, por meio da escrita de critérios de aceite e atualização dos casos de uso, documentando o que os desenvolvedores precisam para construir a funcionalidade.
- **Resultado esperado:** regras de negócio da iteração atual documentadas para os desenvolvedores.

**Evidências:** [Inserir link]

#### Prática: Representação

- **Técnicas a serem aplicadas:** Refinamento Visual (Atualização de Protótipos de Interface).
- **Como será aplicado:** os protótipos de interface **serão** atualizados e ajustados sob demanda, refletindo pequenas adaptações de tela ou de fluxo que se mostrarem necessárias ao longo do desenvolvimento do código.
- **Resultado esperado:** telas e fluxos ajustados conforme necessidades ou limitações que surgirem durante o desenvolvimento.

**Evidências:** [Inserir link]

#### Prática: Verificação e Validação

- **Técnicas a serem aplicadas:** Testes Baseados em Requisitos (Verificação) e Demonstrações Incrementais (Validação).
- **Como será aplicado:** o software implementado **será** verificado por meio de técnicas convencionais de teste para averiguar objetivamente se as regras de negócio e os critérios de aceite foram plenamente atendidos. Em seguida, as funcionalidades desenvolvidas **serão** apresentadas aos stakeholders em demonstrações iterativas, permitindo validar se o sistema continua a atender às necessidades da creche e incorporar feedback nas próximas iterações.
- **Resultado esperado:** funcionalidades verificadas iterativamente com o cliente e feedback recolhido para os passos seguintes.

**Evidências:** [Inserir link]

#### Prática: Organização e Atualização

- **Técnicas em aplicação:** Revisão e Manutenção do Backlog (Atualização de Requisitos e Gerenciamento de Mudanças) e Construção da Árvore de Rastreabilidade.
- **Como está sendo aplicado:** os requisitos **estão sendo** atualizados constantemente conforme as alterações identificadas durante o desenvolvimento. Novos requisitos ou modificações **estão sendo** registrados e avaliados considerando o seu impacto e prioridade para o projeto. Em conjunto com essas atualizações, **está sendo construída** uma árvore de rastreabilidade para mapear e gerenciar visualmente as ligações e a evolução desses requisitos.
- **Resultado esperado:** backlog de requisitos atualizado, incorporando feedbacks, controlando novas demandas e mantendo a rastreabilidade estruturada em árvore.

**Evidências:** [Inserir link]

### 5.1.4 Transição

#### Prática: Verificação e Validação

- **Técnicas a serem aplicadas:** Testes de Aceitação do Usuário (UAT) e Validação com Stakeholders.
- **Como será aplicado:** serão realizados testes de aceitação com as principais usuárias do sistema (secretárias) para verificar se as funcionalidades implementadas atendem aos requisitos e às necessidades reais da rotina administrativa da creche. Por fim, a solução será avaliada pela direção, coordenação e secretárias antes da sua utilização definitiva, o que permitirá identificar e corrigir os ajustes finais.
- **Resultado esperado:** sistema validado de forma definitiva pelas usuárias finais no ambiente real da instituição.

**Evidências:**

- [Inserir link para o Relatório de Testes de Aceitação (UAT)]
- [Inserir link para a Ata/Termo de Homologação e Aceite Final com o cliente]

#### Prática: Organização e Atualização

- **Técnicas a serem aplicadas:** Gestão de Conhecimento e Registro de Melhorias Futuras.
- **Como será aplicado:** as necessidades, novas ideias ou funcionalidades que não forem essenciais para o MVP (versão atual) **serão** formalmente registradas e organizadas no backlog para possíveis iterações e evoluções futuras.
- **Resultado esperado:** novas demandas e melhorias não críticas registradas e organizadas para futuras versões do sistema.

**Evidências:** [Inserir link]
