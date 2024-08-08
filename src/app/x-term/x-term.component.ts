import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Terminal } from 'xterm';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-x-term',
  templateUrl: './x-term.component.html',
  styleUrls: ['./x-term.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class XTermComponent  implements OnInit{
  @ViewChild('terminalContainer', { static: true }) terminalContainer!: ElementRef;
  terminal!: Terminal;

  constructor(private socket: Socket) {}

  ngOnInit(): void {
    this.terminal = new Terminal({
      rows:14, 
      fontSize:12
    });
    this.terminal.open(this.terminalContainer.nativeElement);
    this.terminal.write('Welcome to \x1B[1;3;31mCode Stack\x1B[0m $ ');
    this.terminal.onData((data)=>{
      this.socket.emit('terminal:write',data);
    })

    this.socket.on('terminal:data',(data:any)=>{
      this.terminal.write(data);
    })
  }
}
