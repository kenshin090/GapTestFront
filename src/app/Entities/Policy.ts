import { BuiltinMethod } from '@angular/compiler';
import { PoliciesCoverages } from './PoliciesCoverages';
import { RiskType } from './RiskType';

export class Policy {
    
  
    Id: number;
    CoveragePeriod: number;
    Price: number;
    Description: string;
    Name: string;
    Coverages : PoliciesCoverages[];
    RiskTypeId: number;
    RiskType: RiskType
}

      