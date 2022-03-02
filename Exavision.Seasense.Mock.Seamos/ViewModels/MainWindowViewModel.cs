using Exavision.Seasense.Mock.Seamos.Units;
using ReactiveUI;

namespace Exavision.Seasense.Mock.Seamos.ViewModels {
    public class MainWindowViewModel : ViewModelBase {
        public string Greeting => "Seamos Mock";

        public UnitSeamos UnitSeamos { get => this.unitSeamos; set => this.RaiseAndSetIfChanged(ref unitSeamos, value); }

        private UnitSeamos unitSeamos;

        public MainWindowViewModel() {
            this.UnitSeamos = new UnitSeamos();


        }


    }
}
