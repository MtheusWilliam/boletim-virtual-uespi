<template>
  <v-tabs vertical>
    <v-tab>
      <v-icon left>
        mdi-account
      </v-icon>
      <span class="leftSpan">Ações<br>Extensionistas</span>
      <v-spacer></v-spacer>
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-lock
      </v-icon>
      <span class="leftSpan">Relatório Ações<br>Extensionistas</span>  
      <v-spacer></v-spacer>
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      <span class="leftSpan">Levantamento<br>de Bolsas</span> 
      <v-spacer></v-spacer>
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p>
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
          </p>

          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
          </p>

          <p>
            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
    data: () => ({
      headers: [
          {
            text: 'Cursos',
            align: 'start',
            sortable: false,
            value: 'curso',
          },
          { text: 'Áreas Temáticas', value: 'areas' },
          { text: 'Tipo', value: 'tipo'},
          { text: 'Programas/Projetos', value: 'projetos'},
          { text: 'Coordenador(a)', value: 'coordenador'},
          { text: 'Situação', value: 'situacao' },
        ],
        desserts: [
          {
            curso: 'Bacharelado em Ciência da Computação',
            areas: 'Comunicação e Tecnologia',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'APRENDENDO LÓGICA ESTRUTURAL TEXTUAL E LATEX: PROCEDIMEN-TOS LÓGICOS PARA PRODUÇÕES CIENTÍFICAS E ACADÊMICAS UTILIZANDO COMO RECURSO A TIPOGRAFIA LATEX',
            coordenador: 'Danilo Borges da Silva',
            situacao: 'Cadastrado',
          },
          {
            curso: 'Bacharelado em Ciência da Computação',
            areas: 'Comunicação, Educação, Saúde e Tecnologia',
            tipo: '-',
            projetos: 'PROGRAMA ILUMINADO: EDUCAÇÃO, ROBÓTICA E SAÚDE PARA FAMÍLIAS EM SITUAÇÃO DE RISCO SOCIAL DA PERIFERIA DE PARNAÍBA-PI',
            coordenador: 'Dário Brito Calçada',
            situacao: 'Cadastrado',
          },
          {
            curso: 'Bacharelado em Ciência da Computação',
            areas: 'Comunicação, Educação e Tecnologia',
            tipo: 'PROGRAMA DE EXTENSÃO',
            projetos: 'TRANSFORMAÇÃO DIGITAL: FOMENTANDO O DESENVOLVIMENTO DIGITAL DE CRIANÇAS, JOVENS, ADULTOS E IDOSOS.',
            coordenador: 'Dário Brito Calçada | Danilo Borges da Silva | Suzana Matos França de Oliveira',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Bacharelado em Ciência da Computação',
            areas: 'Tecnologia',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'PROJETO DE EXTENSÃO CURSO DE LÓGICA DE PROGRAMAÇÃO',
            coordenador: 'Francisco das Chagas Rocha',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Bacharelado em Ciência da Computação',
            areas: 'Tecnologia',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'CURSO DE RACIOCÍNIO LÓGICO PARA ENTENDIMENTO DE ELETRÔNICA',
            coordenador: 'Sérgio Barros de Sousa',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em Filosofia',
            areas: 'Cultura',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'INTRODUÇÃO A CRÍTICA DA RAZÃO PURA',
            coordenador: 'Francisco Winston José da Silva | Sorainy de Oliveira Mangueira',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em Filosofia',
            areas: 'Cultura e Educação',
            tipo: 'EVENTO DE EXTENSÃO',
            projetos: 'II ENCONTRO NIETZSCHE E FOUCAULT: DIÁLOGOS',
            coordenador: 'Roberta Liana Damasceno Costa',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em Filosofia',
            areas: 'Cultura',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'HISTÓRIA DA ARTE: ESTUDO DOS MOVIMENTOS ARTÍSTICOS COM O USO DE NOVAS PLATAFORMAS E FERRAMENTAS DIGITAIS',
            coordenador: 'Solange Aparecida de Campos Costa',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em Pedagogia',
            areas: '-',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'CORAL DE LIBRAS – COLIBRAS',
            coordenador: ' Eva de Moraes Lima Moura | Robson Santos da Silva',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em Pedagogia',
            areas: 'Cultura e Educação',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'CURSO BÁSICO DE LÍNGUA BRASEILEIRA DE SINAIS – LIBRAS PARA A COMUNIDADE OUVINTE E SURDA DE PARNAÍBA',
            coordenador: 'Eva de Moraes Lima Moura',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Licenciatura Plena em Ciências Biológicas',
            areas: 'Educação',
            tipo: 'EVENTO DE EXTENSÃO',
            projetos: 'RECEPÇÃO DE DISCENTES DO CURSO DE LICENCIATURA PLENA EM CIÊNCIAS BIOLÓGICAS',
            coordenador: 'Alessandra Ribeiro Torres',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em História',
            areas: 'Direitos Humanos',
            tipo: '-',
            projetos: 'VIGIAR E PUNIR: A FORMAÇÃO DA SOCIEDADE DISCIPLINAR ENTRE A RETÓRICA HUMANISTA E A ENGENHOSIDADE DO CAPITALISMO',
            coordenador: 'Idelmar Gomes | Cavalcante Júnior',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em História',
            areas: 'Educação e Cultura',
            tipo: 'EVENTO DE EXTENSÃO',
            projetos: 'CENTENÁRIO DA ESTAÇÃO FERROVIÁRIA DE PARNAÍBA: REFLEXÕES SOBRE A CIDADE E O TREM NO PIAUÍ',
            coordenador: 'Felipe Augusto dos Santos Ribeiro',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. Plena em História',
            areas: 'Educação',
            tipo: '-',
            projetos: 'CICLO DE DEBATES PÚBLICOS SOBRE ENSINO DE HISTÓRIA E MEMÓRIA',
            coordenador: 'Fernando Bagiotto Botton',
            situacao: 'Cadastrado',
          },
          {
            curso: 'Bacharelado em Agronomia',
            areas: 'Comunicação',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'CRIAÇÃO E MANUTENÇÃO DO SITE “DITALPI – PRODUÇÃO AGRÍCOLA COM QUALIDADE',
            coordenador: 'Aurinete Daienn Borges do Val',
            situacao: 'Cadastrado',
          },
          {
            curso: 'Bacharelado em Agronomia',
            areas: 'Educação',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'BATE-PAPO AGRO',
            coordenador: 'Fernando Silva Araújo',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Odontologia',
            areas: '-',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'LIGA ACADÊMICA DE CIRURGIA E TRAUMATOLOGIA BUCO-MAXILO-FACIAIS',
            coordenador: 'Jean de Pinho Mendes',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Odontologia',
            areas: 'Saúde',
            tipo: 'EVENTO DE EXTENSÃO',
            projetos: 'FAMÍLIA ODONTO UESPI: ACOLHIMEN-TO CALOUROS',
            coordenador: 'Maria Ângela Arêa Leão Ferraz',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Odontologia',
            areas: 'Educação',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'PESQUISA QUALITATIVA EM SAÚDE',
            coordenador: 'Brunna Verna Castro Gondinho',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Odontologia',
            areas: 'Saúde',
            tipo: 'EVENTO DE EXTENSÃO',
            projetos: 'PRÉ - JOPAR – PRÉ JORNADA ACADÊMICA DE ODONTOLOGIA DE PARNAÍBA',
            coordenador: 'Brunna Verna Castro Gondinho',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Odontologia',
            areas: '-',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'ODONTO UESPI: ASSOCIAÇÃO ATLÉTICA ACADÊMICA NOCIVA – ANO 1',
            coordenador: 'Maria Ângela Arêa Leão Ferraz',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. em Ciências Sociais',
            areas: 'Educação',
            tipo: 'PROJETO DE EXTENSÃO',
            projetos: 'OFICINA REMOTA DE LEITURA E ESCRITA ACADÊMICA',
            coordenador: 'Karina Maria Abreu Cursino',
            situacao: 'Cadastrado',
          },

          {
            curso: 'Lic. em Ciências Sociais',
            areas: 'Educação e Comunicação',
            tipo: 'PROGRAMA DE EXTENSÃO',
            projetos: 'APRENDER PARA INCLUIR, INCLUIR PARA APRENDER',
            coordenador: 'Mara de Souza Paixão',
            situacao: 'Cadastrado',
          },
        ],
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: white;
  }
  h3{
    color: whitesmoke;
  }
  .leftSpan{
    text-align: left;
  }
</style>
