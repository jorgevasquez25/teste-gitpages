# 4. Estratégias de Engenharia de Software

## 4.1 Estratégia Priorizada

- **Abordagem:** a equipe optou pela abordagem híbrida. De acordo com essa prática, aspectos ágeis como a importância do produto funcionando e de o cliente estar disponível para comentários também são aplicados. As dimensões de uma abordagem centrada em planos, como fases e marcos, também são preservadas. Essas escolhas surgiram da suposição da equipe de que o cliente estará disponível para comentários durante todo o desenvolvimento do projeto e quererá alterações, mas também dos desafios representados pelo processamento de quantidades substanciais de dados, pela infraestrutura física da instituição de caridade e pelas questões relacionadas à segurança.
- **Ciclo de vida:** a abordagem escolhida inclui a incorporação de aspectos iterativos e incrementais ao processo de desenvolvimento do software. Isso significa que, durante todo o ciclo de vida, alguns aspectos do sistema serão priorizados, planejados aprofundadamente, construídos e colocados em produção. Ao mesmo tempo, o escopo do produto crescerá ciclicamente de acordo com os resultados dessas etapas e os feedbacks do cliente (a secretaria, a coordenação e a direção da Creche Estação Vida).
- **Processo:** para implementar a estratégia e o ciclo de vida escolhidos, a equipe precisa de um método específico, que, neste caso, é o **OpenUP**. Esse processo é essencialmente uma variação mais leve do UP original e, como tal, é bem-sucedido em equipes menores e com escopo em transformação. Ele possui os benefícios tanto de uma abordagem centrada em planos quanto de uma abordagem ágil, e a quantidade total de documentação necessária é minimizada sem sacrificar a qualidade.

### 4.1.1 Adaptação do OpenUP ao Projeto

Quando se escolhe um método, ele não é, nem de longe, seguido como um conjunto rígido de regras e regulamentos. A equipe escolheu algumas das opções oferecidas como úteis para o projeto atual, conforme descrito abaixo.

### 4.1.2 Relação entre os Artefatos

Dois dos artefatos escolhidos para este projeto podem parecer redundantes: casos de uso e histórias de usuário. A equipe resolveu essa situação especificando relações claras para evitar ambiguidades, conforme mostrado na tabela abaixo.

| Características | Casos de Uso | Histórias de Usuário |
|-----------------|--------------|----------------------|
| Objetivo | Descrição do sistema de acordo com seus atores e ações | Descrição do sistema do ponto de vista dos usuários |
| Uso | Principal para desenvolvimento e validação | Complementares aos casos de uso; usadas para demonstração às partes interessadas |
| Nível | Nível mais alto de descrição, com refinamento gradual; nível de detalhe maior | Breve e casual; nível mais baixo de detalhe |
| Relação | Cada história de usuário é inspirada em pelo menos alguns casos de uso | Cada caso de uso pode ser derivado de várias histórias de usuário |
| Exemplo | A história de usuário "Como secretária, eu quero cadastrar um aluno para ter acesso aos dados" é baseada no caso de uso "Cadastrar aluno" | |

### 4.1.3 Direção dos Riscos

O OpenUP tem sido amplamente orientado por riscos desde seu surgimento. Assim, a equipe precisa abordar primeiro os riscos significativos que se aplicam ao projeto, com aqueles que são menos prováveis sendo abordados posteriormente ou ignorados. Os riscos significativos identificados são apresentados abaixo, juntamente com as formas como serão enfrentados.

| Risco | Maneira de Enfrentar |
|-------|----------------------|
| Segurança | Garantir a confidencialidade e a proteção de informações pessoais; controlar quem tem acesso às informações e ao sistema como um todo. |
| Migração | Determinar se todos os documentos físicos serão convertidos para eletrônicos; se não forem, como a equipe administrará aqueles que continuam sendo usados. |
| Infraestrutura | Ensinar e treinar os membros da equipe sobre tecnologias que estejam alinhadas às capacidades da Creche Estação Vida. |
| Arquitetura de Armazenamento | Definir esse aspecto em uma base iterativa e incremental, em vez de concentrá-lo em uma única etapa, considerando o tamanho e a natureza do projeto. |
| Controle de Acesso | Definir os tipos de permissão para diferentes indivíduos/entidades. |
| Recuperação de Dados | Garantir que a equipe esteja ciente de backup e restauração em caso de perda de dados. |

## 4.2 Quadro Comparativo

Quadro comparativo entre os dois processos que poderiam ser utilizados no projeto.

| Critérios | OpenUP | XP (Extreme Programming) |
|-----------|--------|--------------------------|
| Tipo | Processo de desenvolvimento de software | Processo de desenvolvimento de software |
| Abordagem | Abordagem híbrida | Abordagem centrada em princípios |
| Ciclo de vida | Iterativo incremental | Iterativo incremental |
| Documentação | Documentação leve | Documentação leve |
| Papéis | Analista, Desenvolvedor, Testador, Gerente de Projeto | Cliente, Programador, Coach, Tracker |
| Requisitos | Elicitação gradual, foco em casos de uso leves e na orientação por riscos | Elicitação de histórias por partes interessadas, registradas em releases |
| Validação | Validação contínua e incremental (por exemplo, revisão e demonstração do sistema em cada iteração) | Validação pelo cliente com testes automatizados de aceitação |
| Adaptabilidade | Moderadamente alta | Altamente adaptável |
| Vantagens | Boa combinação de características de processo centrado no modelo e aspectos ágeis; boa opção para equipes e projetos menores; dá uma introdução suave tanto para equipes quanto para clientes ao estilo ágil | Boa adaptabilidade; validação contínua por partes interessadas; testes de aceitação automatizados; documentação mínima de apoio e de artefato |
| Desvantagens | Exige compreensão prévia dos conceitos centrais do UP; menos confiável para grandes projetos | Exige participação intensiva de partes interessadas; não tão adaptável a alguns aspectos de modelagem; pouca documentação disponível para certos modelos; não tão confiável para projetos maiores |
| Foco | Projetos e equipes de pequeno a médio porte, fornecimento leve de documentação | Projetos e equipes de pequeno a médio porte, fornecimento leve de documentação |
| Conclusão | **Adequado ao projeto** | Seria potencialmente aplicável ao projeto, mas o XP requer a cooperação do cliente em níveis muito mais altos e abordagens técnicas específicas que não estão diretamente relacionadas aos problemas centrais do projeto. |

## 4.3 Justificativa

Há alguns pontos críticos que precisam ser considerados ao escolher um processo de desenvolvimento de software. Eles se refletem na decisão da equipe em favor do OpenUP:

1. Adequação ao tamanho da equipe e das partes interessadas;
2. Combinação de múltiplas vantagens;
3. Aderência eficaz às práticas de Engenharia de Requisitos.

### 1. Adequação ao tamanho da equipe e das partes interessadas

Por ser um processo leve, o OpenUP parece ser uma boa escolha para projetos de equipes e clientes menores. Ele é amplamente orientado por riscos, com foco em definir a direção do projeto em uma base iterativa e incremental. Ao mesmo tempo, contém todas as características essenciais de processos tradicionais de desenvolvimento de software de nível médio. Isso pode ser visto na documentação mínima fornecida pelas fases do projeto. Além disso, devido ao ambiente acadêmico do projeto, os requisitos do cliente não são difíceis de compreender, mesmo para uma pessoa sem conhecimento prévio em desenvolvimento de software.

### 2. Combinação de múltiplas vantagens

No OpenUP, características de vários processos de desenvolvimento de software são combinadas em um único framework. Em particular, ele inclui abordagens centradas em planos e ágeis. Assim, é capaz de proporcionar aos projetos estabilidade suficiente com a flexibilidade necessária ao mesmo tempo. Para este projeto, isso é especialmente útil porque alguns dos requisitos do cliente não são claramente definidos, mas ainda assim deveriam fazer parte do projeto. Além disso, há alguns riscos de alto impacto que precisam ser abordados com atenção especial. Por outro lado, a orientação por riscos e a abordagem iterativa são convenientes para dividir grandes problemas em subitens mais simples. De modo geral, essas características tornam possível abordar simultaneamente a flexibilidade e a estabilidade do projeto.

### 3. Aderência eficaz às práticas de Engenharia de Requisitos

Um dos aspectos do OpenUP que causam preocupação à equipe é a correspondência entre as práticas de Engenharia de Requisitos e as práticas de Engenharia de Software. No entanto, ao analisar os objetivos básicos por trás de ambos os conjuntos de práticas, torna-se evidente uma forte correlação entre eles. Ambos concentram-se em obter uma compreensão clara e suficiente do problema a ser resolvido, em encontrar soluções viáveis para ele e em comunicar essas soluções de forma eficaz aos diversos stakeholders. Em termos concretos, isso significa que práticas de Engenharia de Requisitos como elicitação e descoberta, análise e consenso, declaração e representação, e práticas de Engenharia de Software como fases do processo e artefatos são aplicadas de maneira bastante semelhante no OpenUP. Uma correspondência clara entre casos de uso e histórias de usuário também foi identificada, como uma etapa crucial para evitar a confusão entre esses artefatos no projeto.
