import { Component, signal } from '@angular/core';

import { WaveAudioComponent } from './../../../info/components/wave-audio/wave-audio.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Holi!');

  changeDuration = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  };
  changeMessage= (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  };



}
