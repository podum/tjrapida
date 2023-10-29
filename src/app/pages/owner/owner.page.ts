import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonModal } from '@ionic/angular/standalone';

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonModal, ]
})
export class OwnerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
