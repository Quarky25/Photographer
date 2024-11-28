import { animate, stagger, query, style, transition, trigger, state} from '@angular/animations';


export const routeAnimation = 
    trigger('fadeAnimation', [
      transition('* => *', [
      style({opacity: 1}),
      
    ]),
    transition('* => void', [
      animate(1000, style({opacity: 0}))
    ])
  ])
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms ease-out', style({ opacity: 0 }))
  ]),
  
  // Fade in when entering
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in', style({ opacity: 1 }))
  ]),
  
  // Fade in with stagger effect for child elements
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ], { optional: true })
  ])


  
  export const fadInUp =
  trigger('fadeIn', [
    transition(':enter', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
       
        stagger(100, [
          animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ])

  