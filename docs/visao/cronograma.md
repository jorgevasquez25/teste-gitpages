# 6. Cronograma e Entregas

O cronograma do projeto foi estruturado em iterações distribuídas entre as fases do OpenUP, considerando o calendário acadêmico da disciplina e a natureza iterativa e incremental do processo adotado pela equipe.

Cada iteração, conforme sua etapa no ciclo de vida, contempla atividades de refinamento e especificação dos requisitos, validação com os stakeholders, construção e verificação das funcionalidades quando aplicável, validação do incremento e atualização dos artefatos de Engenharia de Requisitos e da rastreabilidade.

Durante a Concepção e a Elaboração, o foco principal está na compreensão do problema, definição e refinamento dos requisitos, priorização do backlog, definição do MVP e validação da solução. A implementação do produto será iniciada após a definição dos requisitos do MVP, conforme a organização das atividades da disciplina.

A participação do cliente ocorre de forma contínua, principalmente por meio da diretora, da coordenadora e das secretárias da Creche Estação Vida. As secretárias participam especialmente da validação dos protótipos, fluxos e incrementos, por serem as principais usuárias da solução.

## Resumo das iterações

| Iteração | Fase | Período | Foco | Situação |
|----------|------|---------|------|----------|
| [1](#iteracao-1-concepcao) | Concepção | 13/08 a 08/09 | Visão do produto e escopo inicial (CP1 a CP7) | :material-check-circle: Concluída |
| [2](#iteracao-2-elaboracao) | Elaboração | 09/09 a 29/09 | Levantamento, análise e priorização; proposta inicial de MVP | :material-check-circle: Concluída |
| [3](#iteracao-3-elaboracao) | Elaboração | 30/09 a 19/10 | Refinamento do MVP; CP1 a CP5 e CP7 | :material-progress-clock: Em andamento |
| [4](#iteracao-4-construcao) | Construção | 20/10 a 29/10 | CP1 e CP4 | :material-calendar: Planejada |
| [5](#iteracao-5-construcao) | Construção | 30/10 a 05/11 | CP2 e CP4 | :material-calendar: Planejada |
| [6](#iteracao-6-construcao) | Construção | 06/11 a 12/11 | CP5 | :material-calendar: Planejada |
| [7](#iteracao-7-construcao) | Construção | 13/11 a 19/11 | CP3 e CP7 | :material-calendar: Planejada |
| [8](#iteracao-8-transicao) | Transição | 24/11 a 03/12 | Homologação do MVP | :material-calendar: Planejada |
| [9](#iteracao-9-transicao) | Transição | 04/12 a 10/12 | Implantação e aceite do MVP | :material-calendar: Planejada |

## Detalhamento

### Iteração 1 — Concepção

- **Período:** 13/08 a 08/09
- **Foco / CPs relacionadas:** definição da visão do produto e levantamento inicial do escopo, contemplando a identificação preliminar das CP1 a CP7.
- **Principais atividades e escopo:** definir a visão do produto, delimitar o problema, identificar as principais necessidades do cliente e estabelecer as características iniciais da solução. Organizar os requisitos iniciais e documentar as estratégias e os riscos do projeto.
- **Entregas e critérios de validação:** documento de visão. A entrega da unidade foi finalizada em setembro, com registro da versão 1.1 em 07/09/2026.
- **Situação:** Concluída

### Iteração 2 — Elaboração

- **Período:** 09/09 a 29/09
- **Foco / CPs relacionadas:** levantamento, análise e priorização das CP1 a CP7, com definição preliminar das funcionalidades prioritárias e proposta inicial de MVP.
- **Principais atividades e escopo:** consolidar, revisar e ajustar, a partir das revisões realizadas, os requisitos; analisar prioridades e definir proposta inicial para o MVP.
- **Entregas e critérios de validação:** [requisitos documentados](../requisitos/index.md), resultados da revisão por pares, ajustes registrados e matriz de priorização. As correções relacionadas às issues foram incorporadas à versão 2.0 do documento, registrada em 24/09/2026.
- **Situação:** Concluída

### Iteração 3 — Elaboração

- **Período:** 30/09 a 19/10
- **Foco / CPs relacionadas:** refinamento do MVP e preparação das CP1 a CP5 e CP7. A CP6 permanece fora do MVP conforme decisão tomada com o cliente em 06/10/2026.
- **Principais atividades e escopo:** consolidar a definição do MVP a partir da validação realizada com o cliente em 06/10/2026. Incorporar os retornos recebidos, elaborar os protótipos das telas e refinar os fluxos de uso. Detalhar o modelo de dados, o controle de acesso, o registro de alterações nos cards, a segurança, os backups, a hospedagem e os limites da migração de dados.
- **Entregas e critérios de validação:** [MVP aprovado pelo cliente](../requisitos/mvp.md); protótipos e fluxos de uso sujeitos à validação das partes interessadas. A reunião para apresentar os protótipos deve ser agendada e confirmada com o cliente. As decisões técnicas ainda pendentes devem ser registradas antes da implementação.
- **Situação:** Em andamento

### Iteração 4 — Construção

- **Período:** 20/10 a 29/10
- **Foco / CPs relacionadas:** CP1 — Gerenciamento de cards de matrícula. CP4 — Controle de acesso, como funcionalidade transversal.
- **Principais atividades e escopo:** implementar o cadastro e o gerenciamento inicial dos cards de matrícula (CP1), integrando desde o início os mecanismos de autenticação e controle de acesso (CP4). Verificar a criação, a consulta básica e a persistência dos registros, assim como o acesso autorizado às funcionalidades.
- **Entregas e critérios de validação:** fluxo inicial de cadastro de cards implementado e testado; autenticação e autorização funcionando nos fluxos desenvolvidos. Revisão interna dos testes e demonstração ao cliente, com data proposta de 29/10/2026.
- **Situação:** Planejada

### Iteração 5 — Construção

- **Período:** 30/10 a 05/11
- **Foco / CPs relacionadas:** CP2 — Edição e atualização de cards de matrícula. Continuidade dos controles de acesso da CP4.
- **Principais atividades e escopo:** implementar a edição e a atualização dos cards de matrícula (CP2), considerando o requisito discutido com o cliente de preservar valores anteriores relevantes quando as informações forem alteradas. Verificar também a consistência dos registros após as atualizações.
- **Entregas e critérios de validação:** funcionalidades de edição e atualização testadas, com evidências de preservação do histórico definido nos requisitos. Revisão interna e validação com o cliente, com data proposta de 05/11/2026.
- **Situação:** Planejada

### Iteração 6 — Construção

- **Período:** 06/11 a 12/11
- **Foco / CPs relacionadas:** CP5 — Gerenciamento de documentos. Dependência dos cards de matrícula da CP1 e manutenção dos controles de acesso da CP4.
- **Principais atividades e escopo:** implementar o gerenciamento de documentos vinculados aos cards de matrícula (CP5), incluindo as operações previstas de anexação, consulta e exclusão. Verificar as permissões de acesso e a integridade dos vínculos entre os documentos e os respectivos cards. Essa funcionalidade será tratada separadamente da edição dos cards, prevista na iteração anterior.
- **Entregas e critérios de validação:** gerenciamento de documentos implementado e testado, com verificação dos vínculos, das permissões e das operações previstas. Revisão interna e validação com o cliente, com data proposta de 12/11/2026.
- **Situação:** Planejada

### Iteração 7 — Construção

- **Período:** 13/11 a 19/11
- **Foco / CPs relacionadas:** CP3 — Consulta de informações dos cards de matrícula. CP7 — Gerenciamento de turmas e etapas. Integração com as funcionalidades anteriores e manutenção da CP4.
- **Principais atividades e escopo:** implementar a consulta de informações dos cards (CP3) e o gerenciamento de turmas e etapas (CP7). Integrar as funcionalidades desenvolvidas, executar testes de integração e regressão e corrigir problemas encontrados.
- **Entregas e critérios de validação:** funcionalidades de consulta, turmas e etapas integradas ao sistema; resultados dos testes registrados; pendências classificadas por impacto e prioridade. Demonstração integrada ao cliente, com data proposta de 19/11/2026, em consonância com o encerramento da Unidade 3.
- **Situação:** Planejada

### Iteração 8 — Transição

- **Período:** 24/11 a 03/12
- **Foco / CPs relacionadas:** homologação do MVP composto pelas CP1, CP2, CP3, CP4, CP5 e CP7. Preparação dos dados, segurança e infraestrutura necessárias à operação do conjunto.
- **Principais atividades e escopo:** executar a preparação para implantação, incluindo homologação, testes integrados, verificações de segurança, backup e recuperação, preparação e conferência dos dados e treinamento dos usuários. A migração deverá contemplar apenas os cards de matrícula de 2026, conforme acordado com o cliente, sem incluir o arquivo histórico anterior. Definir também um procedimento de contingência para problemas durante a transição.
- **Entregas e critérios de validação:** sistema homologado em ambiente de pré-produção; dados de 2026 preparados e conferidos; procedimentos de backup, recuperação e contingência verificados; usuários orientados. Validação com o cliente, com data proposta de 03/12/2026.
- **Situação:** Planejada

### Iteração 9 — Transição

- **Período:** 04/12 a 10/12
- **Foco / CPs relacionadas:** implantação e aceite do MVP: CP1, CP2, CP3, CP4, CP5 e CP7. A CP6 não integra o escopo de entrega previsto para este MVP.
- **Principais atividades e escopo:** preparar e executar a implantação, desde que a hospedagem, a infraestrutura, a segurança e os mecanismos de backup e recuperação estejam confirmados. Acompanhar o funcionamento inicial, corrigir problemas encontrados, finalizar a documentação e definir responsabilidades de suporte e manutenção após a entrega.
- **Entregas e critérios de validação:** sistema disponibilizado para uso somente após a verificação das condições de implantação; testes finais e aceite registrados; documentação e pendências entregues à equipe responsável. A validação final com o cliente tem data proposta de 10/12/2026. O período também deverá contemplar uma margem para correções após a implantação.
- **Situação:** Planejada

## Ciclo de cada iteração

Nas iterações em que houver desenvolvimento de funcionalidades, será adotado o seguinte ciclo:

1. **Refinamento e especificação:** análise dos requisitos necessários para a iteração, atualização dos casos de uso, critérios de aceitação e demais artefatos relacionados.
2. **Prototipação e validação:** quando houver interface ou alteração de fluxo, elaboração ou atualização do protótipo e validação com as secretárias e demais stakeholders envolvidos.
3. **Construção:** implementação do incremento correspondente aos requisitos priorizados para a iteração.
4. **Verificação:** execução de testes funcionais, testes baseados em requisitos, revisão por pares e demais verificações necessárias.
5. **Validação do incremento:** demonstração da funcionalidade aos stakeholders, coleta de feedback e identificação de ajustes.
6. **Organização e atualização:** atualização dos requisitos, backlog, matriz de rastreabilidade, decisões e demais artefatos afetados pelo resultado da iteração.
