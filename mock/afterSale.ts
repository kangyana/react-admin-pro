import { Request, Response } from 'express';

export default {
  'GET /api/report/logistics/efficiency': {
    code: 200,
    logs: [],
    response: {
      collect_sign: '11544.0',
      collect_sign60: '11534.0',
      collect_sign_compare: '0%',
      import_collect: '11927.0',
      import_collect60: '11486.5',
      import_collect_compare: '4%',
      import_ship: '407.0',
      import_ship60: '10.5',
      import_ship_compare: '3776%',
      import_sign: '383.0',
      import_sign60: '47.5',
      import_sign_compare: '706%',
      ship_collect: '11520.0',
      ship_collect60: '11496.5',
      ship_collect_compare: '0%',
      ship_sign: '24.0',
      ship_sign60: '36.5',
      ship_sign_compare: '-34%',
    },
    status: 'success',
  },
  'GET /api/report/logistics/statistics': (req: Request, res: Response) => {
    const { is_count } = req.query;
    if (is_count === 'y') {
      res.send({
        code: 200,
        logs: [],
        response: {
          except30: 1,
          except30_rate: 2400,
          total30: 1,
          unship24: 24,
          unship24_rate: 2400,
          unship36: 23,
          unship48: 23,
          unship48_rate: 2300,
        },
        status: 'success',
      });
      return;
    }
    res.send({
      code: 200,
      logs: [],
      response: {
        data: [
          {
            carton: {
              carton_name: "广州 1号箱",
              goods_id: 1301,
            },
            carton_id: 0,
            diff_time: 123,
            express: { express_id: 1, express_name: '广州京东' },
            express_id: 1,
            import_time: '2020-10-24 12:12:26',
            ship_code: 'f0202010000086',
            ship_id: 88888886,
            ship_number: 'f0202010000001',
            status: '已打印',
          },
          {
            carton: {
              carton_name: "广州 2号箱",
              goods_id: 1302,
            },
            carton_id: 0,
            diff_time: 123,
            express: { express_id: 2, express_name: '广州顺丰' },
            express_id: 2,
            import_time: '2020-10-24 12:18:25',
            ship_code: 'f0202010000002',
            ship_id: 88888887,
            ship_number: '',
            status: '已审核',
          },
          {
            carton: {
              carton_name: "广州 2号箱",
              goods_id: 1303,
            },
            carton_id: 0,
            diff_time: 53,
            express: { express_id: 3, express_name: '广州京东' },
            express_id: 3,
            import_time: '2020-10-27 10:03:43',
            ship_code: 'f0202010000088',
            ship_id: 8888888,
            ship_number: 'f0202010000003',
            status: '已打印',
          },
        ],
        total: 3,
      },
      status: 'success',
    });
  },
  'GET /api/report/logistics/company': {
    code: 200,
    logs: [],
    response: {
      express_province: [
        {
          collect_sign: '481.0',
          express_name: '杭州顺丰',
          province: '浙江省',
        },
      ],
      express_service: [
        {
          collect_sign: '11544.0',
          express_name: '杭州顺丰',
          ship_sign: '24.0',
          sign_rate: '0.00',
        },
      ],
    },
    status: 'success',
  },
};
