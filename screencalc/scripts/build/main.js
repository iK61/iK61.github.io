//prevent form submiting
//q("form")[on]('submit', e => e.preventDefault());

try {
    let screen = new Screen(5.7, 3, 403, "Inches");
    let presenter = new Presenter(screen);
    presenter.display();
}
catch (ex) {
    if (ex.message) console.error(ex.message);
    console.log(ex);
}
