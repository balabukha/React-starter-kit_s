import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#fafafa',
    'color': '#757575',
    'fontFamily': '"Roboto", Arial, Helvetica, sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button': {
    'background': '0 0',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'color': '#757575',
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 36 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 64 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'display': 'inline-block',
    'fontFamily': '"Roboto","Helvetica","Arial",sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '500',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'willChange': 'box-shadow',
    'transition': 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
    'outline': 'none',
    'cursor': 'pointer',
    'textDecoration': 'none',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'verticalAlign': 'middle'
  },
  'button:hover': {
    'backgroundColor': 'rgba(158,158,158,.2)'
  },
  'button:active': {
    'backgroundColor': 'rgba(158,158,158,.4)'
  },
  'buttonicon': {
    'borderRadius': '50%',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'button material-icons': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-12px,-12px)',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'verticalAlign': 'middle'
  },
  'input': {
    'fontFamily': '"Roboto", Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#757575',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'borderRadius': '2px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightgray' }],
    'outline': 'none'
  },
  'main': {
    'background': '#fff',
    'width': [{ 'unit': 'px', 'value': 700 }],
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '2px',
    'overflow': 'hidden',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.14)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.14),0' }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2),0' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'header': {
    'display': 'flex',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }],
    'color': 'white',
    'backgroundColor': '#222',
    'textAlign': 'center',
    'textTransform': 'uppercase'
  },
  'header h1': {
    'display': 'inline-block',
    'color': '#00d8ff',
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }]
  },
  // Stats
  'stats': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'stats table': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'stats th': {
    'textAlign': 'right',
    'fontWeight': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }]
  },
  'stats td': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'fontFamily': 'monospace'
  },
  // Stopwatch
  'stopwatch': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }]
  },
  'stopwatch-time': {
    'fontFamily': 'monospace',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'stopwatch-controls button': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'color': 'white'
  },
  // Todo
  'todo': {
    'display': 'flex',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'backgroundColor': '#fff',
    'transition': 'all .2s',
    'WebkitUserSelect': 'none',
    'userSelect': 'none',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'alignItems': 'center'
  },
  'todocompleted *': {
    'color': 'lightgray'
  },
  'todocompleted todo-title': {
    'textDecoration': 'line-through'
  },
  'todo todo-title': {
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'todo checkbox': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'todo button:not(checkbox)': {
    'opacity': '0',
    'transition': 'all .2s'
  },
  'todo:hover button:not(checkbox)': {
    'opacity': '1'
  },
  'todo-edit-form': {
    'display': 'flex',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.85 }, { 'unit': 'em', 'value': 0.85 }, { 'unit': 'em', 'value': 0.85 }, { 'unit': 'em', 'value': 0.85 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }]
  },
  'todo-edit-form input': {
    'flex': '1'
  },
  'todo-edit-form save': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.5 }]
  },
  // Todo form
  'todo-form': {
    'display': 'flex',
    'backgroundColor': '#FAFAFA',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'todo-form input': {
    'flex': '1',
    'outline': 'none',
    'transition': 'all .2s'
  },
  'todo-form input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00d8ff' }]
  },
  'todo-form button': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'subtitle': {
    'textDecoration': 'underline'
  },
  // animation
  // начальное состояние
  'slide-enter': {
    'transform': 'translateX(-100%)'
  },
  // конечное состояние анимации появления элемента
  'slide-enterslide-enter-active': {
    'transform': 'translateX(0)',
    'transition': 'all 0.5s'
  },
  'slide-leave': {
    'transform': 'translateX(0)'
  },
  'slide-leaveslide-leave-active': {
    'transform': 'translateX(100%)',
    'transition': 'all 0.5s'
  },
  'slide-appear': {
    'opacity': '0'
  },
  'slide-appearslide-appear-active': {
    'opacity': '1',
    'transition': 'all 0.5s'
  }
});
