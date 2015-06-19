/**
 * Created by alexbostic on 6/19/15.
 */
/**
 * Created by alexbostic on 1/31/15.
 */
var commonModule = angular.module('commonModule');

commonModule.factory('common.recallModel', [ recallModel]);

function recallModel (){


    var Recall = {

        init:function(rNum, reason, status, initDate, state, prodType, prodDescription, country, city, firm, reportDate, classification){
            this.recall_number = rNum;
            this.reason_for_recall = reason;
            this.status = status;
            //"distribution_pattern"
            //"product_quantity"
            this.recall_initiation_date = initDate;
            this.state = state;
            //"event_id"
            this.product_type = prodType;
            this.product_description = prodDescription;
            this.country = country;
            this.city = city;
            this.recalling_firm = firm;
            this.report_date = reportDate;
            //"@epoch"
            //"voluntary_mandated"
            this.classification = classification;
            //"code_info"
            //"@id"
            //"openfda"
            //"initial_firm_notification"
        }
    }

    Recall.create = function (data) {

        var rc = Object.create(Recall);
        rc.init(data.title,
            data.recall_number,
            data.reason_for_recall,
            data.status,
            data.recall_initiation_date,
            data.state,
            data.product_type,
            data.product_description,
            data.country,
            data.city,
            data.recalling_firm,
            data.report_date,
            data.classification
        );

        return rc;
    };

    return Recall;
}