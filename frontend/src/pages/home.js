import React from 'react';
import { IonPage, IonCard, IonIcon, IonFab, IonFabButton, IonCardContent, IonGrid, IonContent, IonRow, IonCol } from "@ionic/react";
import {addOutline} from "ionicons/icons"
import stopwatch from './stopwatch.svg';
import rightArrow from './right-arrow.svg';

export default function Home() {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="8">
                            <h1 className="bold top-head">Your Schedule</h1>
                            <h2 className="purple bold">Sunday, 5th April</h2>
                        </IonCol>
                        <IonCol size="4">
                            <h4 className="purple light tom">Tomorrow <img src={rightArrow} alt="test" /></h4>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonCard className="taskCard blur">
                    <IonCardContent>
                        <IonRow className="centerv">
                            <IonCol size="8">
                                <p class="time">07:00AM-07:30AM</p>
                                <h2>Morning Yoga</h2>
                            </IonCol>
                            <IonCol size="4" className="ion-text-end time-cont">
                                <p> <img src={stopwatch} alt="test" />  &nbsp;30 min</p>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonCard className="taskCard blur">
                    <IonCardContent>
                        <IonRow className="centerv">
                            <IonCol size="8">
                                <p class="time">07:00AM-07:30AM</p>
                                <h2>Morning Yoga</h2>
                            </IonCol>
                            <IonCol size="4" className="ion-text-end time-cont">
                                <p> <img src={stopwatch} alt="test" />  &nbsp;30 min</p>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonCard className="taskCard blur">
                    <IonCardContent>
                        <IonRow className="centerv">
                            <IonCol size="8">
                                <p class="time">07:00AM-07:30AM</p>
                                <h2>Morning Yoga</h2>
                            </IonCol>
                            <IonCol size="4" className="ion-text-end time-cont">
                                <p> <img src={stopwatch} alt="test" />  &nbsp;30 min</p>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonCard className="taskCard active">
                    <IonCardContent>
                        <IonRow className="centerv">
                            <IonCol size="8">
                                <p class="time">07:00AM-07:30AM</p>
                                <h2>Morning Yoga</h2>
                            </IonCol>
                            <IonCol size="4" className="ion-text-end time-cont">
                                <p> <img src={stopwatch} alt="test" />  &nbsp;30 min</p>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonCard className="taskCard">
                    <IonCardContent>
                        <IonRow className="centerv">
                            <IonCol size="8">
                                <p class="time">07:00AM-07:30AM</p>
                                <h2>Morning Yoga</h2>
                            </IonCol>
                            <IonCol size="4" className="ion-text-end time-cont">
                                <p> <img src={stopwatch} alt="test" />  &nbsp;30 min</p>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton color="primary">
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>

            </IonContent>
        </IonPage>
    );
}
