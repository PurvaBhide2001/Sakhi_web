<!-- Preloader -->
<div class="preloader flex-column justify-content-center align-items-center">
  <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
</div>
<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="index.php" class="nav-link">होम पेज </a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#" class="nav-link">संपर्क करा</a>
    </li>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">
      <a class="nav-link" data-widget="navbar-search" href="#" role="button">
        <i class="fas fa-search"></i>
      </a>
      <div class="navbar-search-block">
        <form class="form-inline">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i class="fas fa-th-large"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="logout" data-slide="true" role="button">बाहेर पडणे
      </a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <img src="assets/img/zp-logo.png" alt="Admin" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">अंगणवाडी</span>
  </a>
  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block" id="user_login_name">Alexander Pierce</a>
      </div>
    </div>
    <!-- SidebarSearch Form -->
    <div class="form-inline pt-2">
      <div class="input-group" data-widget="sidebar-search">
        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-sidebar">
            <i class="fas fa-search fa-fw"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item menu-open">
          <a href="#" class="nav-link">
            <i class="fa-regular fa-grid-horizontal"></i>
            <span> <i class="bi bi-speedometer2"></i>
            </span>
            &nbsp;&nbsp;&nbsp;

            <p>
            डॅशबोर्ड

              <i class="right fas fa-angle-left"></i>

            </p>

          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./index.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>पेज 1</p>
              </a>
            </li>

          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-people"></i>
            &nbsp;&nbsp;&nbsp; 
            <p>
            लाभार्थी
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-register_students.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>विद्यार्थ्यांची नोंदणी करा</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-students.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>लाभार्थी यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">

            <i class="bi bi-person-circle"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            वापरकर्ता
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-register_user.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>वापरकर्ता नोंदणी करा</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="list-user.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>वापरकर्ता यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-book"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            प्रकल्प 
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-register_praklpa.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>प्रकल्प नोंदणी करा</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="list-prakalpa.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>प्रकल्प यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-circle"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            बिट 
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-register_bit.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p> बिट नोंदणी करा</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="list-bit.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>बिट यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-building"></i>

            &nbsp;&nbsp;&nbsp;
            <p>
            अंगणवाडी 
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-register_aganwadi.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>अंगणवाडी नोंदणी करा </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-aganwadi.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>अंगणवाडी यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-person-circle"></i>
            &nbsp;&nbsp;&nbsp;

            <p>
            अंगणवाडी वापरकर्ता
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-aganwadi_user.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>अंगणवाडी वापरकर्त्याची नोंदणी करा</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-aganwadi_user.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>अंगणवाडी वापरकर्ता यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-graph-up-arrow"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            परिस्थितीजन्य मागणी कार्यक्रम
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./frm-send-tatkal-mahiti-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>परिस्थितीजन्य मागणी कार्यक्रम अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-send-tatkal-mahiti-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>परिस्थितीजन्य मागणी कार्यक्रम अहवाल यादी</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-reply-tatkal-mahiti-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>परिस्थितीजन्य मागणी कार्यक्रम अहवाल उत्तर यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-calendar-month"></i>

            &nbsp;&nbsp;&nbsp;
            <p>
            मासिक देखरेख यादी
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./list-Monthly-monitoring-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>मासिक देखरेख अहवाल यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-calendar-day"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            साप्ताहिक देखरेख यादी
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./list-weekly-monitoring-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>साप्ताहिक देखरेख अहवाल यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-stars"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            अंगणवाडी सुविधा अहवाल
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./list-aganwadi-suvidha-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>अंगणवाडी सुविधा अहवाल यादी</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-person-circle"></i>
            &nbsp;&nbsp;&nbsp;
            <p>
            सर्वेक्षण अहवाल
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./list-aganwadi-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>अंगणवाडी अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-taluka-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>तालुका अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-bit-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>बिट अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./list-prakalpa-report.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>प्रकल्प अहवाल</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="bi bi-person-circle"></i>
            &nbsp;&nbsp;&nbsp;

            <p>
            सुविधा अहवाल
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="./facilities-report-taluka.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>तालुका सुविधा अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./facilities-report-praklpa.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>प्रकल्प सुविधा अहवाल</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./facilities-report-bit.php" class="nav-link">
                <i class="far fa-circle nav-icon text-danger"></i>
                <p>Bit Facilities Report</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="./facilities-report-aganwadi.php" class="nav-link">
                <i class="far fa-circle nav-icon text-warning"></i>
                <p>अंगणवाडी सुविधा अहवाल</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</aside>