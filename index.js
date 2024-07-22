const form = document.getElementById('form');
const unidadeSelect = document.getElementById('unidade');
const formContent = document.getElementById('form-content');

unidadeSelect.addEventListener('change', (e) => {
    const unidadeValue = e.target.value;
    const formData = getFormData(unidadeValue);
    renderForm(formData);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = getFormData(unidadeSelect.value);
    console.log(formData);
    // Enviar dados para o servidor ou processar localmente
});

function getFormData(unidadeValue) {
    switch (unidadeValue) {
        case 'unidade1':
            return {
                cursosAndamento: '',
                alunosMantidos: '',
                vagasOfertadas: '',
                cursosConcluidos: '',
                concluentes: '',
                atividadesRealizadas: '',
                anexoAtividades: '',
                pesquisasAndamento: '',
                pesquisasRealizadas: '',
                statusPesquisas: '',
                anexoPesquisas: ''
            };
        case 'unidade2':
            // Formulário para Unidade 2
            break;
        case 'unidade3':
            // Formulário para Unidade 3
            break;
        case 'unidade4':
            // Formulário para Unidade 4
            break;
        default:
            return {};
    }
}

const selectUnidade = document.getElementById('unidade');

selectUnidade.addEventListener('change', (e) => {
  const selectedUnidade = e.target.value;
  const formHTML = getFormHTML(selectedUnidade);
  formContent.innerHTML = formHTML;
});

/* function getFormHTML(unidade) {
  switch (unidade) {
    case 'unidade1':
      return `
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
      `;
    case 'unidade2':
      return `
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone"><br><br>
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco"><br><br>
      `;
    case 'unidade3':
      return `
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf"><br><br>
        <label for="rg">RG:</label>
        <input type="text" id="rg" name="rg"><br><br>
      `;
    case 'unidade4':
      return `
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento"><br><br>
        <label for="sexo">Sexo:</label>
        <select id="sexo" name="sexo">
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select><br><br>0
      `;
    default:
      return '';
  }
}*/

function getFormHTML(unidade) {
    return `
      <h2>Informações da Unidade ${unidade}</h2>
      <label for="cursosAndamento">Quais os cursos estão em andamento nesse mês?</label>
      <input type="text" id="cursosAndamento" name="cursosAndamento"><br><br>
  
      <label for="alunosMantidos">Quantidade de alunos mantidos esse mês?</label>
      <input type="number" id="alunosMantidos" name="alunosMantidos"><br><br>
  
      <label for="vagasOfertadas">Quantidade de vagas ofertadas?</label>
      <input type="number" id="vagasOfertadas" name="vagasOfertadas"><br><br>
  
      <label for="cursosConcluidos">Quantidade de cursos concluídos?</label>
      <input type="number" id="cursosConcluidos" name="cursosConcluidos"><br><br>
  
      <label for="concluentes">Quantidade de concluentes?</label>
      <input type="number" id="concluentes" name="concluentes"><br><br>
  
      <label for="atividadesRealizadas">Atividades realizadas na unidade esse mês:</label>
      <textarea id="atividadesRealizadas" name="atividadesRealizadas"></textarea><br><br>
  
      <label for="anexoAtividades">Anexo de arquivo (PDF ou imagem):</label>
      <input type="file" id="anexoAtividades" name="anexoAtividades"><br><br>
  
      <label for="pesquisasAndamento">Quantas pesquisas estão em andamento?</label>
      <input type="number" id="pesquisasAndamento" name="pesquisasAndamento"><br><br>
  
      <label for="pesquisasRealizadas">Quantas pesquisas realizadas?</label>
      <input type="number" id="pesquisasRealizadas" name="pesquisasRealizadas"><br><br>
  
      <label for="statusPesquisas">Me atualize do status das pesquisas em andamento:</label>
      <textarea id="statusPesquisas" name="statusPesquisas"></textarea><br><br>
  
      <label for="anexoPesquisas">Anexo de arquivo (PDF ou imagem):</label>
      <input type="file" id="anexoPesquisas" name="anexoPesquisas"><br><br>
    `;
  }

const nomeSelect = document.getElementById('nome');
const unidadeContainer = document.getElementById('unidade-container');
const formularioContainer = document.getElementById('formulario-container');

nomeSelect.addEventListener('change', (e) => {
  const selectedNome = e.target.value;
  const unidades = getUnidades(selectedNome);
  const formulario = getFormulario(selectedNome);

  unidadeContainer.innerHTML = '';
  formularioContainer.innerHTML = '';

  if (unidades) {
    const unidadeSelect = document.createElement('select');
    unidadeSelect.id = 'unidade';
    unidadeSelect.name = 'unidade';

    unidades.forEach((unidade) => {
      const option = document.createElement('option');
      option.value = unidade;
      option.text = unidade;
      unidadeSelect.appendChild(option);
    });

    unidadeContainer.appendChild(unidadeSelect);
  }

  if (formulario) {
    formularioContainer.appendChild(formulario);
  }
});

function getUnidades(selectedNome) {
  switch (selectedNome) {
    case 'CG SECITECE 01':
      return ['unidade 1', 'unidade 2', 'unidade 3', 'unidade 4'];
    case 'VIRANDO O JOGO':
      return ['fortaleza', 'maracanau', 'caucaia', 'juazeiro'];
    default:
      return null;
  }
}

function getFormulario(selectedNome) {
  switch (selectedNome) {
    case 'CG SECITECE 01':
      return createFormularioCGSECITECE01();
    case 'VIRANDO O JOGO':
      return createFormularioVIRANDOOJOGO();
    default:
      return null;
  }
}

function createFormularioCGSECITECE01() {
  const formulario = document.createElement('form');

  // Add form fields for CG SECITECE 01
  formulario.innerHTML = `
    <label for="alunosMantidos">Quantidade de alunos mantidos esse mês?</label>
    <input type="number" id="alunosMantidos" name="alunosMantidos"><br><br>

    <label for="vagasOfertadas">Quantidade de vagas ofertadas?</label>
    <input type="number" id="vagasOfertadas" name="vagasOfertadas"><br><br>

    <label for="cursosConcluidos">Quantidade de cursos concluídos?</label>
    <input type="number" id="cursosConcluidos" name="cursosConcluidos"><br><br>

    <label for="cursosAndamento">Quais os cursos estão em andamento nesse mês?</label>
    <input type="text" id="cursosAndamento" name="cursosAndamento"><br><br>

    <!-- Add more form fields here -->

    <label for="anexoPesquisas">Anexo de arquivo (PDF ou imagem):</label>
    <input type="file" id="anexoPesquisas" name="anexoPesquisas"><br><br>
  `;

  return formulario;
}

function createFormularioVIRANDOOJOGO() {
  const formulario = document.createElement('form');

  // Add form fields for VIRANDO O JOGO
  formulario.innerHTML = `
    <label for="cursosAndamento">Quais os cursos estão em andamento nesse mês?</label>
    <input type="text" id="cursosAndamento" name="cursosAndamento"><br><br>

    <!-- Add more form fields here -->

    <label for="cursosConcluidos">Quantidade de cursos concluídos?</label>
    <input type="number" id="cursosConcluidos" name="cursosConcluidos"><br><br>
  `;

  return formulario;
}