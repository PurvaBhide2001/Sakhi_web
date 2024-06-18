<!-- Preloader -->
<style>
  .brand-images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
    /* Adjust margin as needed */
  }

  .brand-image {
    width: 50px;
    /* Adjust width as needed */
    height: 50px;
    /* Adjust height as needed */
  }
</style>
<div class="preloader flex-column justify-content-center align-items-center">
  <img class="" src="./assets/img/loading.gif" alt="Logo">
</div>

<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index.php" class="nav-link">होम पेज</a>
    </li>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">


    </li>

    <!-- <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i class="fas fa-th-large"></i>
      </a>
    </li> -->
    <li class="nav-item">
      <a class="nav-link" id="logout" data-slide="true" role="button"><button type="button" class="btn btn-block datatable-button btn-sm">लॉग आउट
        </button></a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link text-center">


    <div class="brand-images">
      <img src="./assets/img/umed.png" alt="Image 1" class="brand-image">
      <img src="./assets/img/Muktai_Logo.png" alt="Image 2" class="brand-image">
      <img src="./assets/img/Seal_of_Maharashtra.png" alt="Image 3" class="brand-image">
      <img src="./assets/img/Aajivika_Logo.png" alt="Image 4" class="brand-image">
    </div>
  </a>
  <!-- Sidebar -->
  <div class="sidebar" id="sideBar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block" id="user_login_name"></a>
      </div>
    </div>
  </div>
  <!-- /.sidebar -->
  <div class="sidebar-custom">
    <a href="#" class="btn btn-link"><i class="fas fa-cogs"></i></a>
    <a href="#" class="btn btn-secondary hide-on-collapse pos-right">Help</a>
  </div>
</aside>

<script src="./assets/js/filter/showSideBarAsPerRole.js"></script>
<script>
  showSideBarAsPerRole();
  (() => {
    if (!localStorage.getItem("user")) return
    const user = JSON.parse(localStorage.getItem("user"))
    nameOfLoginUser = document.querySelector("#user_login_name")
    nameOfLoginUser.innerHTML = `${user?.f_name} ${user?.l_name}`;
  })()
</script>
<script>
  const liList = document.querySelectorAll("li");
</script>