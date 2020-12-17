<template>
    <v-card>
        <v-toolbar
        height="80px"
        flat
        class="degrade"
        dark
        >
            <v-spacer></v-spacer>
            <v-toolbar-title>
                {{cityDialogContent.title}}
                <span class="spanSubtitle"><br>{{cityDialogContent.subtitle}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="hideDialog" icon large><v-icon>mdi-close-box</v-icon></v-btn>
        </v-toolbar>
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
                    :items="cityDialogContent.content.acoesExtensionistas"
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
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters(['CITY_DIALOG_CONTENT']),
    citiesContents: function (){
        return this.$store.state.main.citiesContents;
    },
    cityDialogContent: {
        get(){
            return this.$store.getters.CITY_DIALOG_CONTENT;
        },
        set(city){
            this.$store.commit('SET_CITY_DIALOG_CONTENT', {city: city});
        }
    },
  },
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
  }),
  methods:{
        hideDialog(){
            this.$store.commit('HIDE_TOGGLE_CITY_DIALOG');
        }
  }
}
</script>

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
  .spanSubtitle{
      font-size: 0.8em;
  }
</style>
