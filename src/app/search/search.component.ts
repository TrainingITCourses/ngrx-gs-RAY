import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { eCriteria } from './../shared/search-criteria/search-criteria-enum';
import { State } from '../reducers';
import { LoadLaunches, LaunchesFiltered } from './../reducers/launch/launch.actions';
import { LoadTypeMissions } from '../reducers/type-mission/type-mission.actions';
import { LoadTypeStatus } from '../reducers/type-status/type-status.actions';
import { LoadAgencies } from '../reducers/agencie/agencie.actions';
import { CriteriaState } from '../reducers/criteria/criteria.reducer';
import { LaunchesState } from '../reducers/launch/launch.reducer';
import { Launch } from '../reducers/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<State>,
              private criteriaStore: Store<CriteriaState>,
              private launchesStore: Store<LaunchesState>) {}

  ngOnInit() {
    this.loadData();
  
    this.criteriaStore.select( 'criteria' )
      .subscribe( state => this.onChangeValue(state) );
  }

  private loadData = () => {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadTypeMissions());
    this.store.dispatch(new LoadTypeStatus());
    this.store.dispatch(new LoadAgencies());
  }
 
  onChangeValue = (state: any) => {

    console.log('Change criteria: ' + state.criteria + ' - value: ' + state.value);
    
    this.launchesStore.select( 'launch' )
      .subscribe((stateLaunch: any) => {
        const launchesFilter: Launch[] = stateLaunch.launches.filter((launch: Launch) => 
          {
            let valido = false;
            switch (state.criteria) {
              case eCriteria.Agencia:
                valido = launch.agencie == state.value;
                break;
              case eCriteria.Estado:
                valido = launch.status == state.value;
                break;
              case eCriteria.Tipo:
                valido = launch.typeMission == state.value;
                break;
            }
            return valido;
          }
        );
        // this.launchesStore.dispatch( new LaunchesFiltered( launchesFilter ));
      })
  }

}
