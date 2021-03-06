////
// INITIAL EXPAND COLLAPSE
////

// default second level collapsed
const multiOptionChildren = $(".JS_optionsChildren").find('.JS_toolbox-table--children:not(.JS_toolbox-table--colors)');
const multiOptionBodyRow = $(multiOptionChildren).find('.toolbox-table__rowInner');

$.Velocity.animate(multiOptionChildren, 'slideUp').then(function() {
  $(multiOptionBodyRow).addClass('JS_children-closed');
  $(multiOptionChildren).addClass('JS_children-closed');
});


// default collapse for filter-tagpicker / options block
const filterTagPopupChildren = $("#filter-tagpicker .JS_optionsChildren, #filter-datepicker .JS_optionsChildren");
const filterTagPopupBodyRow = $(filterTagPopupChildren).find('.toolbox-table__rowInner');

$.Velocity.animate(filterTagPopupChildren, 'slideUp').then(function() {
  $(filterTagPopupBodyRow).addClass('JS_children-closed');
  $(filterTagPopupChildren).addClass('JS_children-closed');
});
